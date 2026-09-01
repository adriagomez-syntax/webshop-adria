import { useContext } from "react";
import ButtonFilled from "../../common/button/ButtonFilled";
import ButtonOutline from "../../common/button/ButtonOutline";
import SidebarAvailable from "./SidebarAvailable";
import SidebarPrice from "./SidebarPrice";
import ProductContext from "../../../contexts/ProductContext";
import SidebarCategory from "./SidebarCategory";

export default function SidebarFilter({ mobile }) {
	
	const { defaultValues, resetValues, categories, sortSel, minPrice, maxPrice, inStock } = useContext(ProductContext)
	
	function checkDefaultValues() {

		const catSorted = categories.sort();

		if (!defaultValues.category.every((val, i) => val === catSorted[i])
			|| sortSel !== defaultValues.sort
			|| inStock !== defaultValues.inStock
			|| minPrice !== defaultValues.price.min
			|| maxPrice !== defaultValues.price.max
		) { return false }

		return true
	}

	return (
		<>
			<div className="flex flex-col gap-6">
				<SidebarCategory />
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