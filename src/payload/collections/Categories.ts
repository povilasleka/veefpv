import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  orderable: true,
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['label', 'slug'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: {
        description: 'Tab text shown to visitors, e.g. "LIVE EVENTS & CONCERTS"',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Used in the ?category= filter URL, e.g. "events"',
      },
    },
  ],
}
