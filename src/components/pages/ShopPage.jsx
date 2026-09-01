import { useState } from "react";
import Main from "../common/Main";
import ShopHeroSection from "../shop/ShopHeroSection";
import ProductSection from "../shop/ProductSection";
import products from "../../assets/data/products.json" with { type: "json" }
import categoryName from "../../assets/data/categoryName.json" with { type: "json" }
import FilterSection from "../shop/filter/FilterSection";
import ProductContext from "../../contexts/ProductContext"

export default function ShopPage() {
	
	const defaultValues = {
		category: Object.keys(categoryName).sort(),
		sort: 1,
		price: { min: 0, max: 1000 },
		inStock: false
	}

	const sortList = [
		{ id: 1, name: "Beliebheit", func: (a, b) => b.rating - a.rating },
		{ id: 2, name: "Preis (billiger)", func: (a, b) => a.price - b.price },
		{ id: 3, name: "Preis (teuer)", func: (a, b) => b.price - a.price },
		{ id: 4, name: "Name (A-Z)", func: (a, b) => a.name.localeCompare(b.name) },
		{ id: 5, name: "Name (Z-A)", func: (a, b) => b.name.localeCompare(a.name) }
	]

	const [searchValue, setSearch] = useState("")
	const [categories, setCategory] = useState(defaultValues.category)
	const [sortSel, setSort] = useState(defaultValues.sort);
	const [inStock, setInStock] = useState(defaultValues.inStock)
	const [minPrice, setMinPrice] = useState(defaultValues.price.min)
	const [maxPrice, setMaxPrice] = useState(defaultValues.price.max)

	function resetValues() {
		setCategory(defaultValues.category)
		setSort(defaultValues.sort)
		setInStock(defaultValues.inStock)
		setMinPrice(defaultValues.price.min)
		setMaxPrice(defaultValues.price.max)
	}

	const filteredList =  products.filter( product => {
			
		const lowerSearch = searchValue.toLowerCase();
		const categoryLower = categoryName[product.category].toLowerCase()

		// Filter
		return categories.includes(product.category)
		&& (!inStock || product.stock > 0)
		&& (product.price >= minPrice)
		&& (product.price <= maxPrice)
		
		// Search
		&& (product.name.toLowerCase().includes(lowerSearch)
		|| product.description.toLowerCase().includes(lowerSearch) 
		|| categoryLower.includes(lowerSearch))
	})

	const sortFunc = sortList.find(func => func.id === sortSel)?.func || ((a, b) => { return b.rating - a.rating });
	const orderedList = filteredList.sort(sortFunc)

	return (
		<Main className="flex flex-col gap-4">
			<ProductContext value={{ orderedList, defaultValues, resetValues, searchValue, setSearch, sortList, sortSel, setSort, categories, setCategory, minPrice, setMinPrice, maxPrice, setMaxPrice, inStock, setInStock }}>
				<ShopHeroSection />
				<FilterSection />
				<ProductSection />
			</ProductContext>
		</Main>
	)
}