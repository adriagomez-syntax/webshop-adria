import ButtonFilled from "../../common/button/ButtonFilled";
import ButtonLittle from "../../common/button/ButtonLittle";
import ButtonOutline from "../../common/button/ButtonOutline";
import categoryObject from "../../../assets/data/categoryName.json" with { type: "json" }
import { useContext } from "react";
import ProductContext from "../../../contexts/ProductContext";

export default function FilterCategory() {
	
	const { categories, setCategory } = useContext(ProductContext)

	function handleClick(elem) {
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
		<div className="hidden md:flex md:gap-3 md:overflow-x-scroll md:text-nowrap">
			{Object.keys(categoryObject).map(elem => (
				categories.includes(elem)
					? <ButtonFilled key={ elem } size={ ButtonLittle } onClick={() => handleClick(elem)}>
						{categoryObject[elem]}
					</ButtonFilled>
					: <ButtonOutline key={ elem } size={ ButtonLittle } onClick={() => handleClick(elem)} >
						{categoryObject[elem]}
					</ButtonOutline>
			))}
		</div>
	)
}