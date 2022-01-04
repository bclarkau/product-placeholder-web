export const Product = ({ id }) => {
	return <div>
		<div className="relative mb-2">
			<img src={`http://localhost:3001/300?id=${id}&p=30`} alt="Product" />
			<div className="absolute inset-0 rounded-lg bg-stone-100 -z-10" />
		</div>
		<div className="flex justify-between items-center">
			<div className="text-stone-500 font-light md:text-sm">Product Name</div>
			<div className="text-stone-800 font-bold text-lg md:text-base">$20</div>
		</div>
	</div>
}