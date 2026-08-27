import { useState } from "react";
import Main from "../common/Main";
import ShopHeroSection from "../shop/ShopHeroSection";
import ProductSection from "../shop/ProductSection";
import products from "../../assets/data/products.json" with { type: "json" }
import categoryName from "../../assets/data/categoryName.json" with { type: "json" }
import FilterSection from "../shop/filter/FilterSection";

export default function ShopPage() {
	
	const defaultValues = {
		price: { min: 0, max: 1000 },
		inStock: false
	}

	const [searchValue, setSearch] = useState("")
	const [category, setCategory] = useState("Alle")
	const [sortFunc, setSort] = useState(1);
	const [inStock, setInStock] = useState(defaultValues.inStock)
	const [minPrice, setMinPrice] = useState(defaultValues.price.min)
	const [maxPrice, setMaxPrice] = useState(defaultValues.price.max)

	const sortList = [
		{ id: 1, name: "Beliebheit", func: (a, b) => a.rating < b.rating },
		{ id: 2, name: "Preis (billiger)", func: (a, b) => a.price > b.price },
		{ id: 3, name: "Preis (teuer)", func: (a, b) => a.price < b.price },
		{ id: 4, name: "Name (A-Z)", func: (a, b) => a.name > b.name },
		{ id: 5, name: "Name (Z-A)", func: (a, b) => a.name < b.name }
	]

	const filteredList =  products.filter( product => {
			
		const lowerSearch = searchValue.toLowerCase();
		const categoryLower = categoryName[product.category].toLowerCase()

		// Filter
		return (category === "Alle" || product.category === category)
		&& (!inStock || product.stock > 0)
		&& (product.price >= minPrice)
		&& (product.price <= maxPrice)
		
		// Search
		&& (product.name.toLowerCase().includes(lowerSearch)
		|| product.description.toLowerCase().includes(lowerSearch) 
		|| categoryLower.includes(lowerSearch))
	})

	const orderedList = filteredList.sort(sortList.find(func => func.id === sortFunc)?.func)
	
	return (
		<Main className="flex flex-col gap-4">
			<ShopHeroSection resultNum={ orderedList.length } />
			<FilterSection searchValue={ searchValue } setSearch={ setSearch } sortList={ sortList } sortFunc={ sortFunc } setSort={ setSort } category={ category } setCategory={ setCategory } />
			<ProductSection products={ orderedList } defaultValues={ defaultValues } minPrice={ minPrice } setMinPrice={ setMinPrice } maxPrice={ maxPrice } setMaxPrice={ setMaxPrice } inStock={ inStock } setInStock={ setInStock } />
		</Main>
	)
}