import SidebarInputGroup from "./SidebarInputGroup";

export default function SidebarAvailable({ inStock, setInStock, valueChanged, mobile = true }) {
	
	function handleChange(event) {
		setInStock(Boolean(Number(event.target.value)))
		valueChanged()
	}

	return (
		<SidebarInputGroup label="Verfügbarkeit" className="text-accent-2">
			<div className="flex gap-2">
				<input id={`filterStockAll${mobile ? "Mobile" : "Laptop"}`} type="radio" name={`stock${mobile ? "Mobile" : "Laptop"}`} value="0"
					checked={ !inStock }
					onChange={ handleChange }
				/>
				<label htmlFor={`filterStockAll${mobile ? "Mobile" : "Laptop"}`} className="text-xs">Alle</label>
			</div>
			<div className="flex gap-2">
				<input id={`filterStockOnly${mobile ? "Mobile" : "Laptop"}`} type="radio" name={`stock${mobile ? "Mobile" : "Laptop"}`} value="1"
					checked={ inStock }
					onChange={ handleChange }
				/>
				<label htmlFor={`filterStockOnly${mobile ? "Mobile" : "Laptop"}`} className="text-xs">Auf Lager</label>
			</div>
		</SidebarInputGroup>
	)
}