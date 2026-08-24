import Section from "../common/Section"
import ProductList from "./list/ProductList"

export default function ProductSection() {
	return (
		<Section className="flex flex-col gap-4">
			<p>Order</p>
			<div className="flex flex-col md:flex-row justify-between gap-4">
				<p>Filter</p>
				<ProductList />
			</div>
		</Section>
	)
}