import Head from "next/head"
import Link from "next/link"

import { Footer } from "../components/footer"
import { Image } from "../components/image"

const Images = ({ images, error }) => {
  return <div className="container mx-auto px-10 text-stone-700">
    <Head>
      <title>Product Placeholder - Image list and credits</title>
    </Head>

    <header className="sm:flex justify-between items-center py-10">
		<Link href="/"><a className="text-orange-500 font-bold text-2xl lg:text-3xl">Product Placeholders</a></Link>
		<h1 className="text-lg">Image list and credits</h1>
    </header>

    <main>
		{error && <div>An error occured fetching the image list. <a className="underline" href="https://github.com/bclarkau/product-placeholder" target="_blank">Check the repo</a>.</div>}
		<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
			{images.map(img => <div key={img.id} className="mb-8">
				<a href={img.source} target="_blank" className="relative inline-block bg-stone-100 rounded hover:bg-stone-200 transition-colors">
					<div className="absolute top-2 left-2 rounded-full bg-orange-500 text-white py-1 px-2 text-xs">ID: {img.id}</div>
					<Image id={img.id} width="320" height="320" padding="30" />
				</a>
				<dl className="text-xs">
					<dt>Author</dt>
					<dd>{img.author}</dd>
					<dt>License</dt>
					<dd>{img.license || 'N/A'}</dd>
					<dt>Altered?</dt>
					<dd>{img.altered || 'N/A'}</dd>
				</dl>
			</div>)}
		</div>
    </main>

	<Footer />
  </div>
}

export const getServerSideProps = async (context) => {
	try {
		const res = await fetch('https://prd.place/images')
		const images = await res.json()

		return {
			props: {
				images
			},
		}
	} catch (err) {
		return {
			props: {
				error: true,
				images: []
			}
		}
	}
}

export default Images
