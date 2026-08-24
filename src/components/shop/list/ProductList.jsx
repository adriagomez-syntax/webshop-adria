import products from "../../../assets/data/products.json" with { type: "json" }
import ProductCard from "./ProductCard"
import ProductListPagination from "./ProductListPagination"

export default function ProductList() {
	return (
		<div className="flex flex-col gap-12">
			<ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
				{products.map(product => (
					<ProductCard key={ product.id } {...product} />
				))}
			</ul>
			<ProductListPagination />
		</div>
	)
}