import ProductCard from "./ProductCard"
//import ProductListPagination from "./ProductListPagination"

export default function ProductList({ filteredList }) {

	return (
		<div className="flex-1 flex flex-col gap-12 min-h-[10vh]">
			{ filteredList.length > 0
				? <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
					{filteredList.map(product => (
						<ProductCard key={ product.id } {...product} />
					))}
				</ul>
				: <div className="flex-1 flex justify-center items-center">
					<p className="text-xl text-center">Keine Ergebnisse :(</p>
				</div>
			}
			{/*<ProductListPagination />*/}
		</div>
	)
}