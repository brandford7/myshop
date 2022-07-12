import { Layout } from '../components'
import { StateContext } from '../context/stateContext';
import '../styles/globals.css'
StateContext


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
