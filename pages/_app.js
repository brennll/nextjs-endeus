import MobileAppsContext from "/component/mobileAppsContext";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <MobileAppsContext><Component {...pageProps} /></MobileAppsContext>
}

export default MyApp