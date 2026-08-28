import ButtonFilled from "../../common/button/ButtonFilled";
import ButtonLittle from "../../common/button/ButtonLittle";
import ButtonOutline from "../../common/button/ButtonOutline";
import categoryObject from "../../../assets/data/categoryName.json" with { type: "json" }

export default function FilterCategory({ category, setCategory }) {
	
	const categoryList = ["Alle"].concat(Object.keys(categoryObject))

	function getCategoryName(category)
	{
		if (category === "Alle") { return category }

		return categoryObject[category]
	}

	return (
		<div className="flex gap-3 overflow-x-scroll text-nowrap">
			{categoryList.map(elem => (
				category === elem
					? <ButtonFilled key={ elem } size={ ButtonLittle }>
						{getCategoryName(elem)}
					</ButtonFilled>
					: <ButtonOutline key={ elem } size={ ButtonLittle } onClick={() => setCategory(elem)} >
						{getCategoryName(elem)}
					</ButtonOutline>
			))}
		</div>
	)
}