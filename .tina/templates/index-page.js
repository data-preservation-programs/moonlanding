import { grid } from './layouts'
import { textBlock, imageBlock } from './blocks'

export const indexPage = {
  label: 'Page Content',
  name: 'page_content',
  type: 'object',
  fields: [
    {
      label: 'Section 1',
      name: 'section_1',
      type: 'object',
      fields: [
        {
          label: 'ID',
          name: 'id',
          type: 'string'
        },
        grid,
        {
          label: 'Blocks',
          name: 'block',
          type: 'object',
          list: true,
          fields: [textBlock, imageBlock]
        }
      ]
    },
    {
      label: 'Section 2',
      name: 'section_2',
      type: 'object',
      fields: [
        {
          label: 'ID',
          name: 'id',
          type: 'string'
        },
        grid,
        {
          label: 'Blocks',
          name: 'block',
          type: 'object',
          list: true,
          fields: [textBlock, imageBlock]
        }
      ]
    },
    {
      label: 'Section 3',
      name: 'section_3',
      type: 'object',
      fields: [
        {
          label: 'ID',
          name: 'id',
          type: 'string'
        },
        grid,
        {
          label: 'Blocks',
          name: 'block',
          type: 'object',
          list: true,
          fields: [textBlock, imageBlock]
        }
      ]
    }
  ]
}
