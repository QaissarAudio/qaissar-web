import type { CollectionConfig } from 'payload'

export const DistributorApplications: CollectionConfig = {
  slug: 'distributor-applications',
  labels: {
    singular: 'Distributor Application',
    plural: 'Distributor Applications',
  },
  admin: {
    useAsTitle: 'companyName',
    defaultColumns: ['companyName', 'country', 'businessType', 'status', 'submittedAt'],
  },
  access: {
    // Public POST allowed so the form can submit without authentication
    create: () => true,
    // All other operations require an authenticated admin user
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create') {
          data.submittedAt = new Date().toISOString()
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      label: 'Company Name',
      required: true,
    },
    {
      name: 'contactName',
      type: 'text',
      label: 'Contact Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
      required: true,
    },
    {
      name: 'country',
      type: 'text',
      label: 'Country',
      required: true,
    },
    {
      name: 'businessType',
      type: 'select',
      label: 'Business Type',
      required: true,
      options: [
        { label: 'AV Distributor', value: 'av-distributor' },
        { label: 'CCTV Distributor', value: 'cctv-distributor' },
        { label: 'Retailer', value: 'retailer' },
        { label: 'System Integrator', value: 'system-integrator' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'marketsServed',
      type: 'select',
      label: 'Markets Served',
      hasMany: true,
      options: [
        { label: 'GCC', value: 'gcc' },
        { label: 'Iraq', value: 'iraq' },
        { label: 'Malaysia', value: 'malaysia' },
        { label: 'Singapore', value: 'singapore' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
      ],
    },
    {
      name: 'submittedAt',
      type: 'date',
      label: 'Submitted At',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
  ],
}
