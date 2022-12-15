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

export const videoBlock:TinaTemplate = {
  label: 'Video block',
  name: 'video_block',
  _template: 'video_block',
  type: 'object',
  fields: [
    columns,
    {
      label: 'Preview Image',
      name: 'preview_image',
      type: 'image'
    },
    {
      label: 'Video URL',
      name: 'url',
      type: 'string'
    },
    {
      label: 'Image Alt',
      name: 'alt',
      type: 'string'
    },
    {
      label: 'Image Tint',
      name: 'tint',
      type: 'boolean',
      default: false
    },
    {
      label: 'Video subtext',
      name: 'subtext',
      type: 'string'
    }
  ]
}
