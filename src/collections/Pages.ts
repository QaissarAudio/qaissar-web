import type { CollectionConfig, Block } from 'payload'

const StatsBlock: Block = {
  slug: 'stats-block',
  labels: { singular: 'Stats Block', plural: 'Stats Blocks' },
  fields: [
    { name: 'sectionTitle', type: 'text', label: 'Section Title' },
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      fields: [
        { name: 'statNumber', type: 'text', label: 'Number', required: true },
        { name: 'statLabel', type: 'text', label: 'Label', required: true },
      ],
    },
  ],
}

const FeaturesBlock: Block = {
  slug: 'features-block',
  labels: { singular: 'Features Block', plural: 'Features Blocks' },
  fields: [
    { name: 'sectionTitle', type: 'text', label: 'Section Title' },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      fields: [
        { name: 'icon', type: 'text', label: 'Icon Name' },
        { name: 'title', type: 'text', label: 'Title', required: true },
        { name: 'description', type: 'textarea', label: 'Description' },
      ],
    },
  ],
}

const MarketsBlock: Block = {
  slug: 'markets-block',
  labels: { singular: 'Markets Block', plural: 'Markets Blocks' },
  fields: [
    { name: 'sectionTitle', type: 'text', label: 'Section Title' },
    {
      name: 'markets',
      type: 'array',
      label: 'Markets',
      fields: [
        { name: 'marketName', type: 'text', label: 'Market Name', required: true },
        { name: 'description', type: 'text', label: 'Description' },
        { name: 'icon', type: 'text', label: 'Icon Name' },
      ],
    },
  ],
}

const TestimonialsBlock: Block = {
  slug: 'testimonials-block',
  labels: { singular: 'Testimonials Block', plural: 'Testimonials Blocks' },
  fields: [
    { name: 'sectionTitle', type: 'text', label: 'Section Title' },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      fields: [
        { name: 'quote', type: 'textarea', label: 'Quote', required: true },
        { name: 'authorName', type: 'text', label: 'Author Name', required: true },
        { name: 'authorTitle', type: 'text', label: 'Author Title' },
        { name: 'companyName', type: 'text', label: 'Company Name' },
        { name: 'locations', type: 'number', label: 'Number of Locations' },
      ],
    },
  ],
}

const CTABlock: Block = {
  slug: 'cta-block',
  labels: { singular: 'CTA Block', plural: 'CTA Blocks' },
  fields: [
    { name: 'headline', type: 'text', label: 'Headline' },
    { name: 'subline', type: 'textarea', label: 'Subline' },
    { name: 'buttonText', type: 'text', label: 'Button Text' },
    { name: 'buttonUrl', type: 'text', label: 'Button URL' },
    {
      name: 'darkBackground',
      type: 'checkbox',
      label: 'Dark Background',
      defaultValue: true,
    },
  ],
}

const ProductShowcaseBlock: Block = {
  slug: 'product-showcase-block',
  labels: { singular: 'Product Showcase Block', plural: 'Product Showcase Blocks' },
  fields: [
    { name: 'sectionTitle', type: 'text', label: 'Section Title' },
    { name: 'subline', type: 'text', label: 'Subline' },
    {
      name: 'showFeaturedOnly',
      type: 'checkbox',
      label: 'Show Featured Products Only',
      defaultValue: true,
    },
  ],
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Page Title',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      unique: true,
      required: true,
      admin: {
        description: 'URL slug for this page.',
      },
    },
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'headline', type: 'text', label: 'Headline' },
        { name: 'subline', type: 'textarea', label: 'Subline' },
        { name: 'ctaPrimaryText', type: 'text', label: 'Primary CTA Text' },
        { name: 'ctaPrimaryUrl', type: 'text', label: 'Primary CTA URL' },
        { name: 'ctaSecondaryText', type: 'text', label: 'Secondary CTA Text' },
        { name: 'ctaSecondaryUrl', type: 'text', label: 'Secondary CTA URL' },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Background Image',
        },
        {
          name: 'productImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Product Image',
        },
      ],
    },
    {
      name: 'contentBlocks',
      type: 'blocks',
      label: 'Page Sections',
      blocks: [
        StatsBlock,
        FeaturesBlock,
        MarketsBlock,
        TestimonialsBlock,
        CTABlock,
        ProductShowcaseBlock,
      ],
    },
  ],
}
