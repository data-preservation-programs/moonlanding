import { client } from '../.tina/__generated__/client'
import { useTina } from 'tinacms/dist/edit-state'

export default function HomePage(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data
  })

  return <div>{data.page.title}</div>
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
