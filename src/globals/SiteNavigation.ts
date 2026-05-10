import type { GlobalConfig } from 'payload'

export const SiteNavigation: GlobalConfig = {
  slug: 'site-navigation',
  label: 'Site Navigation',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navLinks',
      type: 'array',
      label: 'Navigation Links',
      fields: [
        { name: 'label', type: 'text', label: 'Label', required: true },
        { name: 'url', type: 'text', label: 'URL', required: true },
        { name: 'openInNewTab', type: 'checkbox', label: 'Open in New Tab', defaultValue: false },
      ],
    },
    {
      name: 'ctaButtonText',
      type: 'text',
      label: 'CTA Button Text',
      defaultValue: 'Become a Distributor',
    },
    {
      name: 'ctaButtonUrl',
      type: 'text',
      label: 'CTA Button URL',
      defaultValue: '/distributor',
    },
  ],
}
