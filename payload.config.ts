import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { DistributorApplications } from './src/collections/DistributorApplications'
import { Media } from './src/collections/Media'
import { Pages } from './src/collections/Pages'
import { Products } from './src/collections/Products'
import { Users } from './src/collections/Users'
import { SiteFooter } from './src/globals/SiteFooter'
import { SiteNavigation } from './src/globals/SiteNavigation'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '— Qaissar',
    },
    importMap: {
      autoGenerate: false,
    },
  },
  collections: [Users, Media, Products, Pages, DistributorApplications],
  globals: [SiteNavigation, SiteFooter],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
    autoGenerate: false,
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    push: false,
  }),
  sharp,
  serverURL,
  cors: [serverURL, 'https://qaissar.com'],
  csrf: [serverURL, 'https://qaissar.com'],
})
