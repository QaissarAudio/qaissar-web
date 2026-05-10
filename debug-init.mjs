import { buildConfig, getPayload } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
  if (reason instanceof Error) {
    console.error('Stack:', reason.stack)
  }
  process.exit(1)
})

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Import all collections
const { Users } = await import('./src/collections/Users.ts')
const { Media } = await import('./src/collections/Media.ts')
const { Products } = await import('./src/collections/Products.ts')
const { Pages } = await import('./src/collections/Pages.ts')
const { DistributorApplications } = await import('./src/collections/DistributorApplications.ts')
const { SiteNavigation } = await import('./src/globals/SiteNavigation.ts')
const { SiteFooter } = await import('./src/globals/SiteFooter.ts')

// Walk all collections and check for undefined options in select fields
function checkFields(fields, path = '') {
  if (!fields) return
  for (const field of fields) {
    const fieldPath = `${path}.${field.name || field.type}`
    if (field.type === 'select' || field.type === 'radio') {
      if (!field.options) {
        console.error(`!!! UNDEFINED OPTIONS at ${fieldPath}`)
      } else {
        console.log(`OK select field: ${fieldPath} with ${field.options.length} options`)
      }
    }
    if (field.fields) checkFields(field.fields, fieldPath)
    if (field.tabs) {
      for (const tab of field.tabs) {
        checkFields(tab.fields, `${fieldPath}.tab`)
      }
    }
    if (field.blocks) {
      for (const block of field.blocks) {
        checkFields(block.fields, `${fieldPath}.block[${block.slug}]`)
      }
    }
  }
}

const collections = [Users, Media, Products, Pages, DistributorApplications]
const globals = [SiteNavigation, SiteFooter]

for (const col of collections) {
  console.log(`\nChecking collection: ${col.slug}`)
  checkFields(col.fields, col.slug)
}
for (const glob of globals) {
  console.log(`\nChecking global: ${glob.slug}`)
  checkFields(glob.fields, glob.slug)
}

console.log('\nAll user fields checked. Now initializing Payload...')

try {
  const config = await buildConfig({
    collections: [Users, Media, Products, Pages, DistributorApplications],
    globals: [SiteNavigation, SiteFooter],
    editor: lexicalEditor({}),
    secret: 'test-secret-123',
    db: postgresAdapter({
      pool: {
        connectionString: process.env.DATABASE_URI || ''
      },
      push: false
    }),
    typescript: {
      outputFile: path.resolve(__dirname, 'payload-types.ts'),
      autoGenerate: false
    }
  })

  const payload = await getPayload({ config })
  console.log('Payload initialized successfully!')
  process.exit(0)
} catch(e) {
  console.error('ERROR initializing Payload:')
  console.error(e.message)
  console.error(e.stack)
  process.exit(1)
}
