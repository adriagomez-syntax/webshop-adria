import { useContext } from "react";
import SidebarInputGroup from "./SidebarInputGroup"
import ProductContext from "../../../contexts/ProductContext";

export default function SidebarPrice() {
	
	const { maxPrice, minPrice, setMaxPrice, setMinPrice } = useContext(ProductContext) 

	const minPercent = Math.round((minPrice / 1000) * 100);
	const maxPercent = Math.round((maxPrice / 1000) * 100);

	function handleMinPrice(price) {
		
		if (price >= maxPrice) { price = maxPrice - 1 }
		
		setMinPrice(price)
	}

	function handleMaxPrice(price) {
		if (price <= minPrice) { price = minPrice + 1 }
		
		setMaxPrice(price)
	}
	
	return (
		<SidebarInputGroup label="Preisbereich" className="text-secondary">
			<div className="relative">
				<div className="absolute mt-1 md:mt-2 w-full h-1 bg-background-mid rounded" />
				<div className="absolute mt-1 md:mt-2 w-full h-1 bg-secondary rounded" style={{
					left: `${minPercent}%`,
					width: `${maxPercent - minPercent}%`
				}} />
				<input type="range" min="0" max="1000" value={ minPrice } onChange={ (event) => handleMinPrice(Number(event.target.value)) } 
					className="absolute w-full pointer-events-none appearance-none bg-transparent 
					[&::-webkit-slider-thumb]:pointer-events-auto 
					[&::-webkit-slider-thumb]:appearance-none 
					[&::-webkit-slider-thumb]:h-4 
					[&::-webkit-slider-thumb]:w-4 
					[&::-webkit-slider-thumb]:bg-secondary 
					[&::-webkit-slider-thumb]:rounded-full
					[&::-moz-range-thumb]:pointer-events-auto

					[&::-moz-range-thumb]:appearance-none
					[&::-moz-range-thumb]:h-4
					[&::-moz-range-thumb]:w-4
					[&::-moz-range-thumb]:bg-secondary
					[&::-moz-range-thumb]:border-none
					[&::-moz-range-thumb]:rounded-full"
				/>
				<input type="range" min="0" max="1000" value={ maxPrice } onChange={ (event) => handleMaxPrice(Number(event.target.value)) } 
					className="absolute w-full pointer-events-none appearance-none bg-transparent 
					[&::-webkit-slider-thumb]:pointer-events-auto 
					[&::-webkit-slider-thumb]:appearance-none 
					[&::-webkit-slider-thumb]:h-4 
					[&::-webkit-slider-thumb]:w-4 
					[&::-webkit-slider-thumb]:bg-secondary 
					[&::-webkit-slider-thumb]:rounded-full
					
					[&::-moz-range-thumb]:pointer-events-auto
					[&::-moz-range-thumb]:appearance-none
					[&::-moz-range-thumb]:h-4
					[&::-moz-range-thumb]:w-4
					[&::-moz-range-thumb]:bg-secondary
					[&::-moz-range-thumb]:border-none
					[&::-moz-range-thumb]:rounded-full"
				/>
			</div>
			<div className="flex justify-between gap-4 mt-4">
				<p>{ minPrice } €</p>
				<p>{ maxPrice } €</p>
			</div>
		</SidebarInputGroup>
	)
}