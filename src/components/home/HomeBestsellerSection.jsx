import Section from "../common/Section";
import { FaTrophy } from "react-icons/fa";
import products from "../../assets/data/products.json" with { type: "json" }
import ScrollList from "../common/ScrollList";
import ProductCard from "../common/product/ProductCard";

export default function HomeBestseller() {
	
	const productsSorted = products.sort((a, b) => a.stock - b.stock)
	const listBestseller = []
	
	let i = 0
	while(productsSorted.length > 0 && listBestseller.length < 5)
	{
		listBestseller.push(productsSorted[i % productsSorted.length])
		i++;
	}
		
	return (
		<Section className="mt-8 gap-4">
			<div className="flex gap-2 text-accent-2 font-secondary tracking-widest items-center text-2xs">
				<FaTrophy />
				<h3 className="font-secondary tracking-widest uppercase">Schnell zugreifen, bevor alles vergriffen ist!</h3>
			</div>
			<h2 className="font-secondary tracking-widest font-bold text-text text-xl">Bestseller</h2>
			<ScrollList list={ listBestseller } itemComponent={ ProductCard } />
		</Section>
	)
}