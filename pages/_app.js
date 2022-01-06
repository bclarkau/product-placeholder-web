import '../styles/globals.css'

import Head from 'next/head'
import { usePanelbear } from '@panelbear/panelbear-nextjs'

const App = ({ Component, pageProps }) => {
	usePanelbear('DaOAvmDeyxp')

	return <>
	    <Head>
			<title>Product Placeholders</title>
			<meta name="description" content="Generate transparent, customisable product image placeholders for e-commerce site mockups" />
			<link rel="canonical" href="https://productplaceholder.com" />

			<meta property="og:site_name" content="Product placeholders" />
			<meta property="og:title" content="Product placeholders" />
			<meta property="og:description" content="Generate transparent, customisable product image placeholders for e-commerce site mockups" />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="https://prd.place/400?p=80" />
			<meta property="og:url" content="https://productplaceholder.com" />

			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff8300" />
			<meta name="msapplication-TileColor" content="#ff8300" />
			<meta name="theme-color" content="#ff8300" />
		</Head>
		<Component {...pageProps} />
	</>
}

export default App