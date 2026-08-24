import products from "../../assets/data/products.json" with { type: "json" }
import ProductCard from "./ProductCard"
import Section from "../common/Section"

export default function ProductSection() {
	return (
		<Section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{products.map(product => (
				<ProductCard key={ product.id } {...product} />
			))}
		</Section>
	)
}