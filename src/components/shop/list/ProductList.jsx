import ProductCard from "./product/ProductCard"
import ProductListPagination from "./ProductListPagination"
import products from "../../../assets/data/products.json" with { type: "json" }
import categoryName from "../../../assets/data/categoryName.json" with { type: "json" }

export default function ProductList({ searchValue }) {
	
	const filteredList = products.filter( product => {
		
		const lowerSearch = searchValue.toLowerCase();
		const categoryLower = categoryName[product.category].toLowerCase()

		return product.name.toLowerCase().includes(lowerSearch) 
		|| product.description.toLowerCase().includes(lowerSearch) 
		|| categoryLower.includes(lowerSearch) 
	})

	return (
		<div className="flex flex-col gap-12">
			{ filteredList.length > 0
				? <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
					{filteredList.map(product => (
						<ProductCard key={ product.id } {...product} />
					))}
				</ul>
				: <p className="text-xl text-center">Keine Ergebnisse :(</p>
			}
			<ProductListPagination />
		</div>
	)
}