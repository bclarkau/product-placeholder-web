import { ProductImage } from "./image"

export const Product = ({ id }) => {
	return <div>
		<div className="relative mb-2">
			<ProductImage {...{id}} width="300" height="300" padding="30" />
			<div className="absolute inset-0 rounded-lg bg-stone-100 -z-10" />
		</div>
		<div className="flex justify-between items-center">
			<div className="text-stone-500 font-light text-sm md:text-sm">Product Name</div>
			<div className="text-stone-800 font-bold text-sm md:text-lg md:text-base">$20</div>
		</div>
	</div>
}