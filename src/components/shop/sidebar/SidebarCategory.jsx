import { useContext } from "react";
import SidebarInputGroup from "./SidebarInputGroup";
import ProductContext from "../../../contexts/ProductContext";
import categoryObject from "../../../assets/data/categoryName.json" with { type: "json" }
import InputCheck from "../../common/InputCheck";

export default function SidebarCategory() {
	
	const { categories, setCategory } = useContext(ProductContext)

	function handleOnChange(elem) {
		
		if (categories.includes(elem))
		{
			setCategory(
				categories.filter((category) => category !== elem)
			)

			return;
		}
		
		setCategory(
			[...categories, elem]
		)
	}

	return (
		<SidebarInputGroup label="Kategory" className="text-accent-2" display="flex md:hidden">
			<ul className="flex flex-col gap-2 text-xs">
				{Object.keys(categoryObject).map(elem => (
					<InputCheck key={ elem } label={ categoryObject[elem] } name="categoryFilter" value={ elem } onChange={ () => handleOnChange(elem) } checked={ categories.includes(elem) } />
				))}
			</ul>
		</SidebarInputGroup>
	)
}