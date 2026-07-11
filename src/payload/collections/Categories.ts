import type { CollectionConfig } from 'payload'
import { revalidatePaths } from '../hooks/revalidatePaths'

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
  hooks: {
    afterChange: [revalidatePaths(['/portfolio'])],
    afterDelete: [revalidatePaths(['/portfolio'])],
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
