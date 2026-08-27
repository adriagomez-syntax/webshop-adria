import SidebarInputGroup from "./SidebarInputGroup";

export default function SidebarAvailable({ inStock, setInStock, valueChanged }) {
	
	function handleChange(event) {
		setInStock(Boolean(Number(event.target.value)))
		valueChanged()
	}

	return (
		<SidebarInputGroup label="Verfügbarkeit" className="text-accent-2">
			<div className="flex gap-2">
				<input id="filterStockAll" type="radio" name="stock" value="0"
					checked={ !inStock }
					onChange={ handleChange }
				/>
				<label htmlFor="filterStockAll" className="text-xs">Alle</label>
			</div>
			<div className="flex gap-2">
				<input id="filterStockOnly" type="radio" name="stock" value="1"
					checked={ inStock }
					onChange={ handleChange }
				/>
				<label htmlFor="filterStockOnly" className="text-xs">Auf Lager</label>
			</div>
		</SidebarInputGroup>
	)
}