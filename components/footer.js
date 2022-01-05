import Link from "next/link"

export const Footer = () => {
	return <footer className="text-center pb-20 sm:p-20">
		<p>Free to use for temporary, non-production use only.</p>
		<p>Images belong to their respective creators, see <Link href="images"><a className="underline">credits</a></Link>.</p>
		<a className="inline-block mt-10 underline" href="https://github.com/bclarkau/product-placeholder" target="_blank" rel="noreferrer">Github</a>
    </footer>
}