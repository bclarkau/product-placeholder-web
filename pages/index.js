import Head from "next/head"

const Home = () => {
  return <div className="container mx-auto scroll-smooth">
    <Head>
      <title>Product image placeholders for e-commerce mockups</title>
    </Head>

    <header className="flex">

      <div className="w-2/5 pt-40">
        <h1 className="text-orange-500 text-6xl font-bold mb-5">Product<br />Placeholders</h1>
        <p className="mb-16">Transparent PNGs for quick e-commerce mockups</p>
        <nav>
          <a href="#howto" className="inline-block px-10 py-5 text-white bg-orange-500 rounded">How to use</a>
          {/* <a href="#howto" className="inline-block px-10 py-5 text-white bg-orange-500 rounded">Images</a> */}
        </nav>
      </div>

      <div className="w-3/5 grid grid-cols-2 p-10">
        <div>
          <img src="http://localhost:3001/300" alt="Product" />
        </div>
        <div>
          <img src="http://localhost:3001/300" alt="Product" />
        </div>
        <div>
          <img src="http://localhost:3001/300" alt="Product" />
        </div>
        <div>
          <img src="http://localhost:3001/300" alt="Product" />
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