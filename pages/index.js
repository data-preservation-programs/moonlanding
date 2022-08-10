// ===================================================================== Imports
import { client } from '../.tina/__generated__/client'
import { useTina } from 'tinacms/dist/edit-state'

import BlockBuilder from '../components/blockbuilder/blockbuilder.js'

// ===================================================================== Exports
export default function HomePage(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  })

  return (
    <main className="page page-index">
      {Object.entries(data.page.page_content).map(([key, value]) => (
        <>
          {key !== '__typename' && <BlockBuilder id={value.id} key={value.id} section={value} />}
        </>
      ))}
    </main>
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
