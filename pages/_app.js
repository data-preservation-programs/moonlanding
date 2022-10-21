import '../styles/main.scss';
import Head from 'next/head'
import Tina from '../.tina/components/TinaDynamicProvider.js'

const App = ({ Component, pageProps }) => {
  return (
    <Tina>
      <Head>
        <title>Moon Landing - Filecoin</title>
      </Head>
      <Component {...pageProps} />
    </Tina>
  )
}

export default App
