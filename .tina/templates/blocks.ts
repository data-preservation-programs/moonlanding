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
      label: 'Icon',
      name: 'icon',
      type: 'string',
      options: [
        {
          label: 'Wheel',
          value: 'wheel'
        },
        {
          label: 'Connection',
          value: 'connection'
        },
        {
          label: 'Power',
          value: 'power'
        }
      ]
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
      label: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      label: 'Videos per row',
      name: 'videos_per_row',
      type: 'number',
      default: 1,
      ui: {
        validate: (val) => {
          if (![1, 2, 3].includes(val)) {
            return 'The number of columns must be either 1, 2 or 3'
          }
        }
      }
    },
    {
      label: 'Video',
      name: 'videos',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Preview Image',
          name: 'preview_image',
          type: 'image'
        },
        {
          label: 'Preview Image External Link',
          name: 'preview_image_ext',
          type: 'string'
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
  ]
}

export const timelineBlock:TinaTemplate = {
  label: 'Timeline block',
  name: 'timeline_block',
  _template: 'timeline_block',
  type: 'object',
  fields: [
    columns,
    {
      label: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      label: 'Timeline',
      name: 'timeline',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Date',
          name: 'date',
          type: 'string'
        },
        {
          label: 'Event',
          name: 'event',
          type: 'string',
          ui: {
            component: 'markdown'
          }
        }
      ]
    }
  ]
}
