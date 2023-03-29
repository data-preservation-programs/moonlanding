// ===================================================================== Imports
import { useMemo } from 'react'
import { client } from '../.tina/__generated__/client'
import { useTina } from 'tinacms/dist/edit-state'
import CloneDeep from 'lodash/cloneDeep'

import Modal from '../components/modal/modal.js'
import Navigation from '../components/navigation/navigation.js'
import BlockBuilder from '../components/blockbuilder/blockbuilder.js'
import Footer from '../components/footer/footer.js'

// ===================================================================== Exports
export default function HomePage(props) {
  const { general } = props.siteData
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.pageData
  })

  const navigation = general?.navigation
  const pageContent = data?.page?.page_content
  const footer = general?.footer

  return (
    <div className="site-container">

      <Modal />

      <Navigation
        logo={navigation?.site_logo?.button}
        navItems={navigation?.nav_items} />

      <main className="page page-index">
        {pageContent && pageContent.sections.map((section, index) => (
          <BlockBuilder key={`section_${index + 1}`} section={section} />
        ))}
      </main>

      <Footer
        logo={footer?.logo}
        image={footer?.image} 
        links={footer?.links} />

    </div>
  )
}

export const getStaticProps = async () => {
  const generalData = await client.queries.general({ relativePath: 'general.json' })
  const pageData = await client.queries.page({ relativePath: 'index.json' })

  return {
    props: {
      siteData: generalData.data,
      pageData: pageData.data,
      query: pageData.query,
      variables: pageData.variables
    }
  }
}
