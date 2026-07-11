import type { CollectionConfig } from 'payload'
import { revalidatePaths } from '../hooks/revalidatePaths'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Project',
    plural: 'Projects',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'slug'],
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
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Unique identifier for this project.',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      hasMany: false,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Card thumbnail photo.',
      },
    },
    {
      name: 'tag',
      type: 'text',
      required: true,
      admin: {
        description: 'Card kicker, e.g. "ARENA · 2025"',
      },
    },
    {
      name: 'desc',
      type: 'text',
      required: true,
      admin: {
        description: 'Short blurb shown on the project card.',
      },
    },
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: { contains: 'video' },
      },
      admin: {
        description: 'Video played in the card play button modal.',
      },
    },
  ],
}
