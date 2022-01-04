import Head from "next/head"
import { Product } from "../components/product"

const Home = () => {
  return <div className="container mx-auto scroll-smooth">
    <Head>
      <title>Product image placeholders for e-commerce mockups</title>
    </Head>

    <header className="flex justify-between">

      <div className="pt-60">
        <h1 className="text-orange-500 text-7xl font-bold mb-5">Product<br />Placeholders</h1>
        <p className="mb-16 text-lg text-stone-700">Transparent product-ish PNGs for quick e-commerce mockups</p>
        <nav>
          <a href="#howto" className="inline-block px-10 py-5 text-white bg-orange-500 rounded">How to use</a>
          {/* <a href="#howto" className="inline-block px-10 py-5 text-white bg-orange-500 rounded">Images</a> */}
        </nav>
      </div>

      <div className="pt-20">
        <div className="inline-grid grid-cols-2 gap-5">
          <div>
            <Product id={35} />
          </div>
          <div>
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

    <main>

    </main>

    <footer>

    </footer>
  </div>
}

export default Home