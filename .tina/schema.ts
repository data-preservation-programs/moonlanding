// .tina/schema.ts
import { defineSchema, defineConfig } from 'tinacms'
import { client } from './__generated__/client.ts'
import type { TinaTemplate } from "tinacms";
import { seo, openGraph } from './templates/general.ts'
import { indexPage } from './templates/index-page.ts'
import { buttonComponent } from './templates/components.ts'

const heroBlock:TinaTemplate = {
  name: 'hero',
  label: 'Hero',
  ui: {
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: 'This Big Text is Totally Awesome',
      text:
        'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Tagline',
      name: 'tagline',
    },
    {
      type: 'string',
      label: 'Headline',
      name: 'headline',
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      ui: {
        component: 'textarea',
      },
    },
  ],
}

const featureBlock:TinaTemplate = {
  name: 'features',
  label: 'Features',
  fields: [
    {
      type: 'object',
      label: 'Feature Items',
      name: 'items',
      list: true,
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
        },
        {
          type: 'string',
          label: 'Text',
          name: 'text',
        },
      ],
    },
  ],
}

const contentBlock:TinaTemplate = {
  name: 'content',
  label: 'Content',
  ui: {
    defaultItem: {
      body:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    },
  },
  fields: [
    {
      type: 'string',
      ui: {
        component: 'textarea',
      },
      label: 'Body',
      name: 'body',
    },
  ],
}

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'

const schema = defineSchema({
  config: {
    token: process.env.TINA_CLOUD_TOKEN, // generated on app.tina.io,
    clientId: process.env.TINA_CLOUD_CLIENT_ID, // generated on app.tina.io
    branch,
    media: {
      tina: {
        publicFolder: "public",
        mediaRoot: "images"
      }
    }
  },
  collections: [
    {
      name: 'kitchen_sink',
      label: 'Kitchen Sink',
      path: 'content/kitchen-sink',
      format: 'json',
      fields: [
        {
          type: 'object',
          list: true,
          name: 'blocks',
          label: 'Sections',
          templates: [heroBlock, featureBlock, contentBlock],
        },
      ],
    },
    {
      label: 'Pages',
      name: 'page',
      path: 'content/pages',
      format: 'json',
      fields: [
        seo,
        openGraph,
        indexPage
      ]
    }
  ],
})

export default schema

// Your tina config

export const tinaConfig = defineConfig({
  client,
  schema,
  cmsCallback: (cms) => {
    //  add your CMS callback code here (if you want)

    // The Route Mapper
    /**
     * 1. Import `tinacms` and `RouteMappingPlugin`
     **/
    import('tinacms').then(({ RouteMappingPlugin }) => {
      /**
       * 2. Define the `RouteMappingPlugin` see https://tina.io/docs/tinacms-context/#the-routemappingplugin for more details
       **/
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        return undefined
      })
      /**
       * 3. Add the `RouteMappingPlugin` to the `cms`.
       **/
      cms.plugins.add(RouteMapping)
    })

    return cms
  },
})
