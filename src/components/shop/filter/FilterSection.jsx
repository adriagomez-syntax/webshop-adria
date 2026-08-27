import Section from "../../common/Section";
import SearchBar from "./SearchBar";
import categoryObject from "../../../assets/data/categoryName.json" with { type: "json" }
import ButtonFilled from "../../common/button/ButtonFilled";
import ButtonLittle from "../../common/button/ButtonLittle";
import ButtonOutline from "../../common/button/ButtonOutline";

export default function FilterSection({ searchValue, setSearch, sortList, sortFunc, setSort, category, setCategory }) {
	
	const categoryList = ["Alle"].concat(Object.keys(categoryObject))
	
	function getCategoryName(category)
	{
		if (category === "Alle") { return category }

		return categoryObject[category]
	}

	return (
		<Section className="gap-4">
			<SearchBar searchValue={ searchValue } setSearch={ setSearch } />
			<div className="flex gap-4 justify-between">
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
				<select value={ sortFunc } onChange={event => setSort(Number(event.target.value)) }>
					{sortList.map(option => (
						<option key={ option.id } value={ option.id }>{ option.name }</option>
					))}
				</select>
			</div>
		</Section>
	)
}