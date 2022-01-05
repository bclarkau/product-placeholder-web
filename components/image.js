import Image from 'next/image'

export const ProductImage = ({ id, width = 200, height = 200, padding = 0 }) => {
	return <Image src={`https://prd.place/${width}/${height}?id=${id}&p=${padding}`} alt="Product" />
}