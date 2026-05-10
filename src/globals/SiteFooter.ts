import type { GlobalConfig } from 'payload'

export const SiteFooter: GlobalConfig = {
  slug: 'site-footer',
  label: 'Site Footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'companyTagline',
      type: 'text',
      label: 'Company Tagline',
    },
    {
      name: 'footerLinks',
      type: 'array',
      label: 'Footer Link Columns',
      fields: [
        { name: 'columnTitle', type: 'text', label: 'Column Title', required: true },
        {
          name: 'links',
          type: 'array',
          label: 'Links',
          fields: [
            { name: 'label', type: 'text', label: 'Label', required: true },
            { name: 'url', type: 'text', label: 'URL', required: true },
          ],
        },
      ],
    },
    {
      name: 'copyrightText',
      type: 'text',
      label: 'Copyright Text',
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          label: 'Platform',
          required: true,
          options: [
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'YouTube', value: 'youtube' },
            { label: 'Twitter / X', value: 'twitter' },
          ],
        },
        { name: 'url', type: 'text', label: 'URL', required: true },
      ],
    },
  ],
}
