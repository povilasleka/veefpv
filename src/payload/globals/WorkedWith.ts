import type { GlobalConfig } from 'payload'

export const WorkedWith: GlobalConfig = {
  slug: 'worked-with',
  label: 'Worked With',
  access: {
    read: () => true,
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
