import { useState } from "react";
import SidebarInputGroup from "./SidebarInputGroup"

export default function SidebarPrice({ maxPrice, minPrice, setMaxPrice, setMinPrice, valueChanged }) {
	
	const [minPercent, setMinPercent] = useState(0);
	const [maxPercent, setMaxPercent] = useState(100);

	function handleMinPrice(event) {
		
		let price = Number(event.target.value)
		if (price >= maxPrice) { price = maxPrice - 1 }
		
		setMinPercent(Math.round((price / 1000) * 100))
		setMinPrice(price)
		valueChanged()
	}

	function handleMaxPrice(event) {
		let price = Number(event.target.value)
		if (price <= minPrice) { price = minPrice + 1 }
		
		setMaxPercent(Math.round((price / 1000) * 100))
		setMaxPrice(price)
		valueChanged()
	}
	
	return (
		<SidebarInputGroup label="Preisbereich" className="text-secondary">
			<div className="relative">
				<div className="absolute mt-1 w-full h-1 bg-background-mid rounded" />
				<div className="absolute mt-1 w-full h-1 bg-secondary rounded" style={{
					left: `${minPercent}%`,
					width: `${maxPercent - minPercent}%`
				}} />
				<input type="range" min="0" max="1000" value={ minPrice } onChange={ handleMinPrice } 
					className="absolute w-full pointer-events-none appearance-none bg-transparent 
					[&::-webkit-slider-thumb]:pointer-events-auto 
					[&::-webkit-slider-thumb]:appearance-none 
					[&::-webkit-slider-thumb]:h-4 
					[&::-webkit-slider-thumb]:w-4 
					[&::-webkit-slider-thumb]:bg-secondary 
					[&::-webkit-slider-thumb]:rounded-full"
				/>
				<input type="range" min="0" max="1000" value={ maxPrice } onChange={ handleMaxPrice } 
					className="absolute w-full pointer-events-none appearance-none bg-transparent 
					[&::-webkit-slider-thumb]:pointer-events-auto 
					[&::-webkit-slider-thumb]:appearance-none 
					[&::-webkit-slider-thumb]:h-4 
					[&::-webkit-slider-thumb]:w-4 
					[&::-webkit-slider-thumb]:bg-secondary 
					[&::-webkit-slider-thumb]:rounded-full"
				/>
			</div>
			<div className="flex justify-between gap-4 mt-4">
				<p>{ minPrice } €</p>
				<p>{ maxPrice } €</p>
			</div>
		</SidebarInputGroup>
	)
}