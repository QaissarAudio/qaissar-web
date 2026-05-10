import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../payload.config'

async function seed() {
  const payload = await getPayload({ config })

  console.log('🌱 Starting seed...')

  // 1. Admin user
  try {
    const existing = await payload.find({
      collection: 'users',
      where: { email: { equals: process.env.PAYLOAD_ADMIN_EMAIL || 'Qaissaraudio@gmail.com' } },
    })

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: process.env.PAYLOAD_ADMIN_EMAIL || 'Qaissaraudio@gmail.com',
          password: process.env.PAYLOAD_ADMIN_PASSWORD || 'ChangeThisPassword123',
        },
      })
      console.log('✅ Admin user created')
    } else {
      console.log('ℹ️  Admin user already exists — skipping')
    }
  } catch (err) {
    console.error('❌ Failed to create admin user:', err)
  }

  // 2. Homepage Page document
  try {
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: 'home' } },
    })

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: 'pages',
        data: {
          title: 'Home',
          slug: 'home',
          hero: {
            headline: 'Commercial Audio Built for the World',
            subline: 'Qaissar designs and manufactures azan clocks, smart amplifiers, and UHF wireless systems — distributed across GCC, Iraq, and Southeast Asia.',
            ctaPrimaryText: 'View Products',
            ctaPrimaryUrl: '/products',
            ctaSecondaryText: 'Become a Distributor',
            ctaSecondaryUrl: '/distributor',
          },
          contentBlocks: [
            {
              blockType: 'stats-block',
              sectionTitle: 'Qaissar by the Numbers',
              stats: [
                { statNumber: '5+', statLabel: 'Product Lines' },
                { statNumber: '10+', statLabel: 'Countries Served' },
                { statNumber: '2015', statLabel: 'Founded' },
              ],
            },
            {
              blockType: 'cta-block',
              headline: 'Ready to distribute Qaissar?',
              subline: 'Join our global distributor network and bring professional audio to your market.',
              buttonText: 'Apply Now',
              buttonUrl: '/distributor',
              darkBackground: true,
            },
          ],
        },
      })
      console.log('✅ Homepage Page created')
    } else {
      console.log('ℹ️  Homepage already exists — skipping')
    }
  } catch (err) {
    console.error('❌ Failed to create homepage:', err)
  }

  // 3. Products
  const products = [
    {
      name: 'Azan Clock Basic',
      category: 'azan-clocks',
      status: 'available',
      shortDescription: 'Entry-level digital azan clock with built-in speaker and 7 daily prayer times.',
      price: 45,
      priceOnRequest: false,
      websiteVisible: true,
      featured: false,
      markets: ['gcc', 'iraq'],
    },
    {
      name: 'Azan Clock Standard',
      category: 'azan-clocks',
      status: 'available',
      shortDescription: 'Mid-range azan clock with LCD display, adjustable volume, and world city database.',
      price: 65,
      priceOnRequest: false,
      websiteVisible: true,
      featured: false,
      markets: ['gcc', 'iraq', 'southeast-asia'],
    },
    {
      name: 'Azan Clock Premium',
      category: 'azan-clocks',
      status: 'available',
      shortDescription: 'Premium azan clock with OLED display, Wi-Fi sync, and remote management.',
      price: 95,
      priceOnRequest: false,
      websiteVisible: true,
      featured: false,
      markets: ['gcc', 'iraq', 'southeast-asia', 'global'],
    },
    {
      name: 'Qaissar Smart Mini Amplifier',
      category: 'smart-amplifiers',
      status: 'available',
      shortDescription: 'Compact smart amplifier with built-in DSP, remote management, and mosque-grade audio output.',
      priceOnRequest: true,
      websiteVisible: true,
      featured: true,
      markets: ['gcc', 'iraq', 'southeast-asia'],
    },
    {
      name: 'UHF 200M Wireless Audio System',
      category: 'uhf-systems',
      status: 'coming-soon',
      shortDescription: '200-metre UHF wireless audio system designed for large mosques and outdoor venues.',
      priceOnRequest: true,
      websiteVisible: true,
      featured: false,
      markets: ['gcc', 'global'],
    },
  ]

  for (const product of products) {
    try {
      const existing = await payload.find({
        collection: 'products',
        where: { name: { equals: product.name } },
      })

      if (existing.totalDocs === 0) {
        await payload.create({
          collection: 'products',
          data: {
            ...product,
            fullDescription: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [{ type: 'text', text: product.shortDescription, version: 1 }],
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
          },
        })
        console.log(`✅ Product created: ${product.name}`)
      } else {
        console.log(`ℹ️  Product already exists: ${product.name} — skipping`)
      }
    } catch (err) {
      console.error(`❌ Failed to create product "${product.name}":`, err)
    }
  }

  console.log('\n🎉 Seed complete.')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Fatal seed error:', err)
  process.exit(1)
})
