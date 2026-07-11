import type { GlobalConfig } from 'payload'
import { revalidatePaths } from '../hooks/revalidatePaths'

export const AboutMe: GlobalConfig = {
  slug: 'about-me',
  label: 'About Me',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [revalidatePaths(['/about'])],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Pilot',
          fields: [
            {
              name: 'eyebrow',
              type: 'text',
              required: true,
              defaultValue: 'The Pilot',
              admin: {
                description: 'Small label above the name, e.g. "The Pilot"',
              },
            },
            {
              name: 'name',
              type: 'text',
              required: true,
              admin: {
                description: 'Shown as the big heading, e.g. "Vitarė Vaišnoraitė"',
              },
            },
            {
              name: 'photo',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Portrait shown next to the intro copy.',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              admin: {
                description: 'Intro paragraph shown under the name.',
              },
            },
            {
              name: 'badges',
              type: 'array',
              admin: {
                description: 'Short achievement badges, e.g. "A1/A3 Licensed & Insured"',
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Fleet',
          fields: [
            {
              name: 'intro',
              type: 'textarea',
              required: true,
              admin: {
                description: 'Blurb shown under the "The Fleet" heading.',
              },
            },
            {
              name: 'rigs',
              type: 'array',
              minRows: 1,
              admin: {
                description: 'Spec cards shown in the fleet grid.',
              },
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'prop', type: 'text', required: true, label: 'Prop' },
                { name: 'speed', type: 'text', required: true, label: 'Max Speed' },
                { name: 'weight', type: 'text', required: true },
                { name: 'camera', type: 'text', required: true },
                { name: 'flight', type: 'text', required: true, label: 'Flight Time' },
                { name: 'range', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'Race Record',
          fields: [
            {
              name: 'achievements',
              type: 'array',
              minRows: 1,
              admin: {
                description: 'Race results shown in the record table, most recent first.',
              },
              fields: [
                { name: 'year', type: 'text', required: true },
                { name: 'title', type: 'text', required: true },
                { name: 'result', type: 'text', required: true },
              ],
            },
          ],
        },
      ],
    },
  ],
}
