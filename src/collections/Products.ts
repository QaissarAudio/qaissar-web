import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

const slugify = (str: string): string =>
  str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Product',
    plural: 'Products',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'status', 'websiteVisible', 'featured'],
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data?.name && !data?.slug) {
          data.slug = slugify(data.name)
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Product Name',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      unique: true,
      required: true,
      admin: {
        readOnly: true,
        description: 'Auto-generated from name. Read-only to protect existing URLs.',
      },
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      required: true,
      options: [
        { label: 'Azan Clocks', value: 'azan-clocks' },
        { label: 'Smart Amplifiers', value: 'smart-amplifiers' },
        { label: 'UHF Systems', value: 'uhf-systems' },
        { label: 'Web Radio', value: 'web-radio' },
        { label: 'Accessories', value: 'accessories' },
      ],
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      label: 'Short Description',
      required: true,
      maxLength: 160,
      admin: {
        description: 'Shown on product cards. Max 160 characters.',
      },
    },
    {
      name: 'fullDescription',
      type: 'richText',
      label: 'Full Description',
      required: true,
      editor: lexicalEditor({}),
    },
    {
      name: 'specs',
      type: 'array',
      label: 'Specifications',
      fields: [
        {
          name: 'specName',
          type: 'text',
          label: 'Spec Name',
          required: true,
        },
        {
          name: 'specValue',
          type: 'text',
          label: 'Spec Value',
          required: true,
        },
      ],
    },
    {
      name: 'priceOnRequest',
      type: 'checkbox',
      label: 'Price on Request',
      defaultValue: false,
      admin: {
        description: 'If checked, "Price on request" is shown instead of a price.',
      },
    },
    {
      name: 'price',
      type: 'number',
      label: 'Price (USD)',
      admin: {
        condition: (data) => !data?.priceOnRequest,
        description: 'Leave empty if price is on request.',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      required: true,
      defaultValue: 'available',
      options: [
        { label: 'Available', value: 'available' },
        { label: 'Coming Soon', value: 'coming-soon' },
      ],
    },
    {
      name: 'websiteVisible',
      type: 'checkbox',
      label: 'Visible on Website',
      defaultValue: true,
      required: true,
      admin: {
        description: 'If unchecked, this product never appears on the website. Filtered at the API query level.',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured',
      defaultValue: false,
      admin: {
        description: 'If checked, this product appears in the homepage featured section.',
      },
    },
    {
      name: 'markets',
      type: 'select',
      label: 'Markets',
      hasMany: true,
      options: [
        { label: 'GCC', value: 'gcc' },
        { label: 'Iraq', value: 'iraq' },
        { label: 'Southeast Asia', value: 'southeast-asia' },
        { label: 'Global', value: 'global' },
      ],
    },
    {
      name: 'productImages',
      type: 'array',
      label: 'Product Images',
      admin: {
        description: 'First image is used as the primary display image.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
