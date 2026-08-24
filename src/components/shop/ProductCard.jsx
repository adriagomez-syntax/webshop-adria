export default function ProductCard({ id, name, description, price, category, stock, img }) {
	return (
		<div>
			<p>{ name }</p>
			<p>{ description }</p>
		</div>
	)
}