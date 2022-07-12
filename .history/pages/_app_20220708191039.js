import { Layout } from '../components'
import { StateContext } from '../context/stateContext';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
   <StateContext></StateContext> <Layout>
      
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
