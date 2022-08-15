export const buttonComponent = {
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
          value: 'nuxt-link'
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
