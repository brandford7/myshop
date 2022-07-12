import { Layout } from '../components'
import { StateContext } from '../context/stateContext';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
   <StateContext> <Layout>
      
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
