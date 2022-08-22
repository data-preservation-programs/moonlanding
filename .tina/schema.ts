// .tina/schema.ts
import { defineSchema, defineConfig } from 'tinacms'
import { client } from './__generated__/client.ts'
import type { TinaTemplate } from "tinacms";
import { seo, openGraph } from './templates/general.ts'
import { indexPage } from './templates/index-page.ts'
import { button, navigation, footer } from './templates/components.ts'

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
      label: 'General Site Content',
      name: 'general',
      path: 'content/general',
      format: 'json',
      fields: [
        navigation,
        footer
      ]
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
