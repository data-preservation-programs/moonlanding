import type { TinaTemplate } from "tinacms";
import { grid } from './layouts'
import { textBlock, imageBlock } from './blocks'

export const indexPage:TinaTemplate = {
  label: 'Page Content',
  name: 'page_content',
  type: 'object',
  fields: [
    {
      label: 'Sections',
      name: 'sections',
      type: 'object',
      list: true,
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
          templates: [textBlock, imageBlock]
        }
      ]
    }
  ]
}
