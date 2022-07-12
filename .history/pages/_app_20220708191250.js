import { Layout } from '../components'
import { StateContext } from '../context/stateContext';
import '../styles/globals.css'
{Toaster} from "react-hot-toaster"

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp
