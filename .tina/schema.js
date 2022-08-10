import { defineSchema, defineConfig } from 'tinacms'
import { client } from './__generated__/client'
import { seo, openGraph } from './templates/general'
import { indexPage } from './templates/index-page'

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'
const schema = defineSchema({
  // See https://tina.io/docs/tina-cloud/connecting-site/ for more information about this config
  config: {
    token: 'ae004fc4091cac9f08c5b5928afde41aff8fed74', // generated on app.tina.io,
    clientId: 'c17a15c9-4d9d-48fe-b7dc-7a28607ab9ac', // generated on app.tina.io
    branch,
  },
  collections: [
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
