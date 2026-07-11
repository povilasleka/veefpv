import type { CollectionConfig } from 'payload'
import { revalidatePaths } from '../hooks/revalidatePaths'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidatePaths(['/', '/about', '/portfolio'])],
    afterDelete: [revalidatePaths(['/', '/about', '/portfolio'])],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
