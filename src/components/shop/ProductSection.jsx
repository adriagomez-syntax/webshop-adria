import Section from "../common/Section"
import ProductList from "./product/ProductList"
import SidebarSection from "./sidebar/SidebarSection"

export default function ProductSection({ products, defaultValues, minPrice, setMinPrice, maxPrice, setMaxPrice, inStock, setInStock }) {
	return (
		<Section className="flex flex-col md:flex-row justify-between gap-4">
			<SidebarSection defaultValues={ defaultValues } minPrice={ minPrice } setMinPrice={ setMinPrice } maxPrice={ maxPrice } setMaxPrice={ setMaxPrice } inStock={ inStock } setInStock={ setInStock } />
			<ProductList filteredList={ products } />
		</Section>
	)
}