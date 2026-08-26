import { useState } from "react"
import Section from "../common/Section"
import ProductList from "./list/ProductList"
import ProductSearch from "./ProductSearch"

export default function ProductSection() {
	
	const [searchValue, setSearch] = useState("")

	return (
		<Section className="flex flex-col gap-4">
			<ProductSearch searchValue={ searchValue } setSearch={ setSearch } />
			<p>Order</p>
			<div className="flex flex-col md:flex-row justify-between gap-4">
				<p>Filter</p>
				<ProductList searchValue={ searchValue } />
			</div>
		</Section>
	)
}