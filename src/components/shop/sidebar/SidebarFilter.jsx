import { useContext } from "react";
import ButtonFilled from "../../common/button/ButtonFilled";
import ButtonOutline from "../../common/button/ButtonOutline";
import SidebarAvailable from "./SidebarAvailable";
import SidebarPrice from "./SidebarPrice";
import ProductContext from "../../../contexts/ProductContext";

export default function SidebarFilter({ mobile, resetValues }) {
	
	const { defaultValues, minPrice, maxPrice, inStock } = useContext(ProductContext)
	
	function checkDefaultValues() {

		if (inStock !== defaultValues.inStock
			|| minPrice !== defaultValues.price.min
			|| maxPrice !== defaultValues.price.max
		) { return false }

		return true
	}

	return (
		<>
			<div className="flex flex-col gap-6">
				<SidebarAvailable mobile={ mobile } />
				<SidebarPrice />
			</div>
			<div className="flex justify-center">
				{checkDefaultValues()
					? <ButtonOutline disabled={true}>
						Filter Zurücksetzen
					</ButtonOutline>
					: <ButtonFilled color="bg-accent-2 text-text"
						onClick={ () => resetValues() }
					>
						Filters Zurücksetzen
					</ButtonFilled>
				}
			</div>
		</>
	)
}