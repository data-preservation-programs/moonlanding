import type { TinaTemplate } from "tinacms";

export const button:TinaTemplate = {
  label: 'Button',
  name: 'button',
  type: 'object',
  fields: [
    {
      label: 'Action',
      name: 'action',
      type: 'string',
      options: [
        {
          label: 'External Link',
          value: 'a'
        },
        {
          label: 'Internal Link',
          value: 'next-link'
        },
        {
          label: 'Button',
          value: 'button'
        }
      ]
    },
    {
      label: 'URL',
      name: 'url',
      type: 'string'
    },
    {
      label: 'Text',
      name: 'text',
      type: 'string'
    },
    {
      label: 'Theme',
      name: 'theme',
      type: 'string'
    },
    {
      label: 'Target',
      name: 'target',
      type: 'string'
    }
  ]
}

export const navigation:TinaTemplate = {
  label: 'Navigation',
  name: 'navigation',
  type: 'object',
  fields: [
    {
      label: 'Site Logo',
      name: 'site_logo',
      type: 'object',
      fields: [button]
    },
    {
      label: 'Nav',
      name: 'nav_items',
      type: 'object',
      list: true,
      fields: [button]
    }
  ]
}

export const footer:TinaTemplate = {
  label: 'Footer',
  name: 'footer',
  type: 'object',
  fields: [
    {
      label: 'Copyright',
      name: 'copyright',
      type: 'object',
      list: true,
      fields: [button]
    }
  ]
}
