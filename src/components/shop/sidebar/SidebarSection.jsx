import { useState } from "react"
import { FaFilter } from "react-icons/fa"
import ButtonOutline from "../../common/button/ButtonOutline"
import SidebarPrice from "./SidebarPrice"
import ButtonFilled from "../../common/button/ButtonFilled"
import SidebarAvailable from "./SidebarAvailable"

export default function SidebarSection({ defaultValues, minPrice, setMinPrice, maxPrice, setMaxPrice, inStock, setInStock }) {

	const [open, setOpen] = useState(false)
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
			<ButtonOutline 
				className="md:hidden flex gap-2 items-center text-text"
				onClick={ () => setOpen(true) }
			>
				<FaFilter />
				<p>Filter</p>
			</ButtonOutline>
			<aside className={(open ? "visible opacity-100" : "invisible opacity-0") + " fixed inset-0 z-100 transition"}>
				<div className="absolute inset-0 bg-black/30" onClick={ () => setOpen(false) } />
				<div className={(open ? "translate-x-0" : "-translate-x-full") + " absolute t-0 l-0 h-full min-w-70 p-6 flex flex-col gap-4 transform transition-transform ease-in-out duration-300 bg-background-card"}>
					<div className="flex flex-col gap-6 justify-between h-full">
						<div className="flex flex-col gap-6">
							<SidebarAvailable inStock={ inStock } setInStock={ setInStock } valueChanged={ checkValues } />
							<SidebarPrice maxPrice={ maxPrice } setMaxPrice={ setMaxPrice } minPrice={ minPrice } setMinPrice={ setMinPrice } valueChanged={ checkValues } />
						</div>
						<div className="flex justify-center">
							{resetEnabled
								? <ButtonFilled color="bg-accent-2 text-text"
									onClick={ () => resetValues() }
								>
									Filters Zurücksetzen
								</ButtonFilled>
								: <ButtonOutline disabled={true}>
									Filter Zurücksetzen
								</ButtonOutline>
							}
						</div>
					</div>
				</div>
			</aside>
		</div>
	)
}