import { columns } from './layouts'
import { buttonComponent } from './components'

export const textBlock = {
  label: 'Text Block',
  name: 'text_block',
  _template: 'text_block',
  type: 'object',
  fields: [
    columns,
    {
      label: 'Format',
      name: 'format',
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
      type: 'string'
    },
    {
      label: 'CTA',
      name: 'cta',
      type: 'object',
      list: true,
      fields: [buttonComponent]
    }
  ]
}

export const imageBlock = {
  label: 'Image block',
  name: 'image_block',
  _template: 'image_block',
  type: 'object',
  fields: [
    columns,
    {
      label: 'Image',
      name: 'src',
      type: 'string'
    }
  ]
}
