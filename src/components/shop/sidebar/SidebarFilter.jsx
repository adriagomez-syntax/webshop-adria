import ButtonFilled from "../../common/button/ButtonFilled";
import ButtonOutline from "../../common/button/ButtonOutline";
import SidebarAvailable from "./SidebarAvailable";
import SidebarPrice from "./SidebarPrice";

export default function SidebarFilter({ mobile, checkValues, resetEnabled, resetValues, inStock, setInStock, minPrice, setMinPrice, maxPrice, setMaxPrice }) {
	return (
		<>
			<div className="flex flex-col gap-6">
				<SidebarAvailable mobile={ mobile } inStock={ inStock } setInStock={ setInStock } valueChanged={ checkValues } />
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
		</>
	)
}