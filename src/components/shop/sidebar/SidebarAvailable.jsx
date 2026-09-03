import { useContext } from "react";
import InputRadio from "../../common/input/InputRadio";
import SidebarInputGroup from "./SidebarInputGroup";
import ProductContext from "../../../contexts/ProductContext";

export default function SidebarAvailable({ mobile = true }) {
	
	const { inStock, setInStock } = useContext(ProductContext)

	function handleChange(event) {
		setInStock(Boolean(Number(event.target.value)))
	}

	return (
		<SidebarInputGroup label="Verfügbarkeit" className="text-primary">
			<div className="flex gap-2">
				<InputRadio id={`filterStockAll${mobile ? "Mobile" : "Laptop"}`} label="Alle" name={`stock${mobile ? "Mobile" : "Laptop"}`} value="0"
					checked={ !inStock }
					onChange={ handleChange }
				/>
			</div>
			<div className="flex gap-2">
				<InputRadio id={`filterStockOnly${mobile ? "Mobile" : "Laptop"}`} label="Auf Lager" name={`stock${mobile ? "Mobile" : "Laptop"}`} value="1"
					checked={ inStock }
					onChange={ handleChange }
				/>
			</div>
		</SidebarInputGroup>
	)
}