import { Layout } from '../components'
import '../styles/globals.css'
State


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
