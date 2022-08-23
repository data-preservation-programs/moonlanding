import type { TinaTemplate } from "tinacms";
import { columns } from './layouts'
import { button } from './components'

export const textBlock:TinaTemplate = {
  label: 'Text Block',
  name: 'text_block',
  type: 'object',
  fields: [
    columns,
    {
      label: 'Format',
      name: 'format',
      type: 'string'
    },
    {
      label: 'Theme',
      name: 'theme',
      type: 'string',
      options: [
        'light',
        'dark'
      ]
    },
    {
      label: 'Label',
      name: 'label',
      type: 'string'
    },
    {
      label: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      label: 'Subheading',
      name: 'subheading',
      type: 'string'
    },
    {
      label: 'Description',
      name: 'description',
      type: 'string',
      ui: {
        component: 'markdown'
      }
    },
    {
      label: 'CTA',
      name: 'cta',
      type: 'object',
      list: true,
      fields: [button]
    }
  ]
}

export const imageBlock:TinaTemplate = {
  label: 'Image block',
  name: 'image_block',
  _template: 'image_block',
  type: 'object',
  fields: [
    columns,
    {
      label: 'Image',
      name: 'src',
      type: 'image'
    },
    {
      label: 'Theme',
      name: 'theme',
      type: 'string',
      options: [
        {
          label: 'none',
          value: 'none'
        },
        {
          label: 'background',
          value: 'background'
        }
      ]
    }
  ]
}
