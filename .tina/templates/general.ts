import type { TinaTemplate } from "tinacms";

export const seo:TinaTemplate = {
  label: 'SEO',
  name: 'seo',
  type: 'object',
  fields: [
    {
      label: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      label: 'Description',
      name: 'description',
      type: 'string'
    }
  ]
}

export const openGraph:TinaTemplate = {
  label: 'Open Graph',
  name: 'og',
  type: 'object',
  fields: [
    {
      label: 'Site Name',
      name: 'site_name',
      type: 'string'
    },
    {
      label: 'URL',
      name: 'url',
      type: 'string'
    },
    {
      label: 'Type',
      name: 'type',
      type: 'string'
    },
    {
      label: 'Image',
      name: 'image',
      type: 'string'
    }
  ]
}
