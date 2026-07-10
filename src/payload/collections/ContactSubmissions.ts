import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  labels: {
    singular: 'Lead',
    plural: 'Leads',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'projectType', 'message', 'createdAt'],
  },
  access: {
    // Entries are only ever created by the contact form's API route via the local API
    // (which bypasses access control). This collection is a read-only log in the admin UI.
    create: () => false,
    update: () => false,
  },
  fields: [
    { name: 'name', type: 'text', required: true, admin: { readOnly: true } },
    { name: 'email', type: 'email', required: true, admin: { readOnly: true } },
    {
      name: 'date',
      type: 'date',
      admin: { readOnly: true, description: 'Requested project date.' },
    },
    { name: 'location', type: 'text', admin: { readOnly: true } },
    {
      name: 'projectType',
      type: 'select',
      required: true,
      admin: { readOnly: true },
      options: [
        { label: 'Live event / concert', value: 'event' },
        { label: 'Music video', value: 'music' },
        { label: 'Commercial / real estate', value: 'commercial' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'propStyle',
      type: 'select',
      required: true,
      admin: { readOnly: true },
      options: [
        { label: 'Open propellers', value: 'open' },
        { label: 'Closed / ducted propellers', value: 'closed' },
      ],
    },
    { name: 'message', type: 'textarea', admin: { readOnly: true } },
  ],
}
