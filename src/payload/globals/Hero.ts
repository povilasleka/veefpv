import type { GlobalConfig } from 'payload'
import { revalidatePaths } from '../hooks/revalidatePaths'

export const Hero: GlobalConfig = {
  slug: 'hero',
  label: 'Hero',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidatePaths(['/'])],
  },
  fields: [
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: { contains: 'video' },
      },
      admin: {
        description: 'Looping background video for the homepage hero section.',
      },
    },
  ],
}
