import type { GlobalConfig } from 'payload'
import { revalidatePaths } from '../hooks/revalidatePaths'

export const WorkedWith: GlobalConfig = {
  slug: 'worked-with',
  label: 'Worked With',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidatePaths(['/'])],
  },
  fields: [
    {
      name: 'brands',
      type: 'array',
      minRows: 1,
      admin: {
        description: 'Brand names shown in the "Worked With" scrolling marquee on the landing page.',
      },
      fields: [
        { name: 'name', type: 'text', required: true },
      ],
    },
  ],
}
