// ===================================================================== Imports
import { client } from '../.tina/__generated__/client'
import { useTina } from 'tinacms/dist/edit-state'
import CloneDeep from 'lodash/cloneDeep'

import Navigation from '../components/navigation/navigation.js'
import BlockBuilder from '../components/blockbuilder/blockbuilder.js'
import Footer from '../components/footer/footer.js'

// ===================================================================== Exports
export default function HomePage(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  })
  const navigation = data?.page?.navigation
  const pageContent = CloneDeep(data?.page?.page_content)
  if (typeof pageContent === 'object' && pageContent.hasOwnProperty('__typename')) {
    delete pageContent.__typename
  }
  const footer = data?.page?.footer

  return (
    <div className="site-container">

    <Navigation
      logo={navigation?.site_logo?.button}
      navItems={navigation?.nav_items} />

      <main className="page page-index">
        {pageContent && Object.entries(pageContent).map(([key, value]) => (
          <BlockBuilder id={value.id} key={value.id} section={value} />
        ))}
      </main>

      <Footer copyright={footer?.copyright} />

    </div>
  )
}

export const getStaticProps = async () => {
  const pageResponse = await client.queries.page({ relativePath: 'index.json' })

  return {
    props: {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables
    }
  }
}
