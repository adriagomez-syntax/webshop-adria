import { useContext } from "react"
import ProductCard from "../../common/product/ProductCard"
import ProductContext from "../../../contexts/ProductContext"
//import ProductListPagination from "./ProductListPagination"

export default function ProductList() {

	const { orderedList } = useContext(ProductContext)

	return (
		<div className="flex-1 flex flex-col gap-12 min-h-[10vh] md:w-2/3">
			{ orderedList.length > 0
				? <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
					{orderedList.map(product => (
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