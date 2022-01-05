import Head from "next/head"
import Link from "next/link"
import { Footer } from "../components/footer"
import { Product } from "../components/product"

const Home = () => {
  return <div className="container mx-auto px-10 text-stone-700">
    <Head>
      <title>Product image placeholders for e-commerce mockups</title>
    </Head>

    <header className="md:flex justify-between mb-20">

      <div className="pt-20 md:pt-40 lg:pt-48 xl:pt-60">
        <h1 className="text-orange-500 font-bold mb-5 text-5xl xl:text-7xl">Product<br />Placeholders</h1>
        <p className="mb-10 lg:mb-16 lg:text-lg pr-10">Transparent product-ish PNGs for quick e-commerce mockups</p>
        <nav className="flex gap-3">
          <a href="#howto" className="inline-block px-6 lg:px-10 py-3 lg:py-5 text-white bg-orange-500 rounded hover:bg-orange-600 transition-colors">How to use</a>
          <Link href="images">
            <a className="inline-block px-6 lg:px-10 py-3 lg:py-5 bg-orange-100 rounded hover:bg-orange-200 transition-colors">View images</a>
          </Link>
        </nav>
      </div>

      <div className="pt-20 md:pl-20">
        <div className="inline-grid sm:grid-cols-4 md:grid-cols-2 gap-5">
          <div>
            <Product id={35} />
          </div>
          <div className="">
            <Product id={2} />
          </div>
          <div>
            <Product id={12} />
          </div>
          <div>
            <Product id={17} />
          </div>
        </div>
      </div>

    </header>

    <main className="border-4 border-orange-200 rounded-lg px-5 py-10 sm:p-10 text-center mb-20">
      <div id="howto" className="scroll-mt-16">

        <h2 className="text-3xl font-bold mb-10">Basic usage</h2>

        <p className="mb-2">Replace the <span className="text-sky-600">width</span> value to create a square image</p>
        <div className="font-mono bg-stone-100 p-4 mb-10">
          <a href="https://prd.place/400" target="_blank" rel="noreferrer">https://prd.place/<span className="text-sky-600">400</span></a>
        </div>

        <p className="mb-2">...or add both <span className="text-sky-600">width</span> and <span className="text-green-600">height</span> to get a custom size</p>
        <div className="font-mono bg-stone-100 p-4 mb-20">
          <a href="https://prd.place/400/600" target="_blank" rel="noreferrer">https://prd.place/<span className="text-sky-600">400</span>/<span className="text-green-600">600</span></a>
        </div>

        <h2 className="text-3xl font-bold mb-10">Options</h2>

        <p className="mb-2">Add blank space around the product with <span className="text-sky-600">padding</span> (or just <span className="text-sky-600">p</span>!)</p>
        <div className="font-mono bg-stone-100 p-4 mb-10">
          <a href="https://prd.place/400?p=80" target="_blank" rel="noreferrer">https://prd.place/400<span className="text-sky-600">?padding=80</span></a>
        </div>

        <p className="mb-2">Get a <Link href="images"><a className="underline">specific image</a></Link> by passing the <span className="text-sky-600">id</span></p>
        <div className="font-mono bg-stone-100 p-4">
          <a href="https://prd.place/400?id=37" target="_blank" rel="noreferrer">https://prd.place/400<span className="text-sky-600">?id=37</span></a>
        </div>

      </div>
    </main>

    <Footer />
  </div>
}

export default Home