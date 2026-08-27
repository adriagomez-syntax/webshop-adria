import { useState } from "react"
import SidebarMobile from "./SidebarMobile"
import SidebarLaptop from "./SidebarLaptop"
import SidebarFilter from "./SidebarFilter"

export default function SidebarSection({ defaultValues, minPrice, setMinPrice, maxPrice, setMaxPrice, inStock, setInStock }) {

	const [resetEnabled, setResetEnabled] = useState(false)

	function checkValues() {
		if (inStock !== defaultValues.inStock
			|| minPrice !== defaultValues.price.min
			|| maxPrice !== defaultValues.price.max
		)
		{
			setResetEnabled(true)
			return
		}

		setResetEnabled(false)
	}

	function resetValues() {
		setInStock(defaultValues.inStock)
		setMinPrice(defaultValues.price.min)
		setMaxPrice(defaultValues.price.max)
	}

	return (
		<div>
			<SidebarMobile>
				<SidebarFilter checkValues={ checkValues } resetEnabled={ resetEnabled } resetValues={ resetValues } inStock={ inStock } setInStock={ setInStock } minPrice={ minPrice } setMinPrice={ setMinPrice } maxPrice={ maxPrice } setMaxPrice={ setMaxPrice } />
			</SidebarMobile>
			<SidebarLaptop>
				<SidebarFilter mobile={ false } checkValues={ checkValues } resetEnabled={ resetEnabled } resetValues={ resetValues } inStock={ inStock } setInStock={ setInStock } minPrice={ minPrice } setMinPrice={ setMinPrice } maxPrice={ maxPrice } setMaxPrice={ setMaxPrice } />
			</SidebarLaptop>
		</div>
	)
}