import '../styles/main.scss';
import Head from 'next/head'
import Tina from '../.tina/components/TinaDynamicProvider.js'
import store from '../app/store'
import { Provider } from 'react-redux'

const App = ({ Component, pageProps }) => {
  return (
    <Tina>
      <Head>
        <title>Moon Landing - Filecoin</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Tina>
  )
}

export default App
