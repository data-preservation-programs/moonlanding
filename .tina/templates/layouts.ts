import type { TinaTemplate } from "tinacms";

export const columns:TinaTemplate = {
  label: 'Columns',
  name: 'cols',
  type: 'object',
  fields: [
    {
      label: 'Number',
      name: 'num',
      type: 'string'
    },
    {
      label: 'Push Left',
      name: 'push_left',
      type: 'string'
    },
    {
      label: 'Push Right',
      name: 'push_right',
      type: 'string'
    }
  ]
}

export const grid:TinaTemplate = {
  label: 'Grid',
  name: 'grid',
  type: 'string',
  list: true,
  options: [
    {
      'label': 'center',
      'value': 'center'
    },
    {
      'label': 'middle',
      'value': 'middle'
    },
    {
      'label': 'bottom',
      'value': 'bottom'
    },
    {
      'label': 'spaceBetween',
      'value': 'spaceBetween'
    },
    {
      'label': 'spaceAround',
      'value': 'spaceAround'
    },
    {
      'label': 'reverse',
      'value': 'reverse'
    },
    {
      'label': 'column',
      'value': 'column'
    },
    {
      'label': 'column-reverse',
      'value': 'column-reverse'
    },
    {
      'label': 'noGutter',
      'value': 'noGutter'
    },
    {
      'label': 'equalHeight',
      'value': 'equalHeight'
    },
    {
      'label': 'noBottom',
      'value': 'noBottom'
    },
    {
      'label': 'noWrap',
      'value': 'noWrap'
    }
  ]
}
