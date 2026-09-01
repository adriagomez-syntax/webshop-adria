import { useContext } from "react"
import SidebarMobile from "./SidebarMobile"
import SidebarLaptop from "./SidebarLaptop"
import SidebarFilter from "./SidebarFilter"
import ProductContext from "../../../contexts/ProductContext"

export default function SidebarSection() {

	const { defaultValues, setMinPrice, setMaxPrice, setInStock } = useContext(ProductContext)

	function resetValues() {
		setInStock(defaultValues.inStock)
		setMinPrice(defaultValues.price.min)
		setMaxPrice(defaultValues.price.max)
	}

	return (
		<div>
			<SidebarMobile>
				<SidebarFilter resetValues={ resetValues } />
			</SidebarMobile>
			<SidebarLaptop>
				<SidebarFilter mobile={ false } resetValues={ resetValues } />
			</SidebarLaptop>
		</div>
	)
}