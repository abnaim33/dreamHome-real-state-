import '../styles/globals.css'
import HouseContextProvider from '../components/HouseContext'
function MyApp({ Component, pageProps }) {
  return <HouseContextProvider>

    <Component {...pageProps} />
  </HouseContextProvider>
}

export default MyApp
