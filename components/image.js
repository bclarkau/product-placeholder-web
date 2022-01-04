export const Image = ({ id, width = 200, height = 200, padding = 0 }) => {
	return <img src={`https://prd.place/${width}/${height}?id=${id}&p=${padding}`} alt="Product" />
}