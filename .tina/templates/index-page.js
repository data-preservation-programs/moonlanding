import { textBlock, imageBlock } from './blocks'

export const indexPage = {
  label: 'Page Content',
  name: 'page_content',
  type: 'object',
  fields: [
    {
      label: 'Section',
      name: 'section',
      type: 'object',
      fields: [
        {
          label: 'ID',
          name: 'id',
          type: 'string'
        },
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
