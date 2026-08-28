import Section from "../../common/Section";
import SearchBar from "./SearchBar";
import FilterCategory from "./FilterCategory"
import FilterSort from "./FilterSort";

export default function FilterSection({ searchValue, setSearch, sortList, sortFunc, setSort, category, setCategory }) {
	return (
		<Section className="gap-4">
			<SearchBar searchValue={ searchValue } setSearch={ setSearch } />
			<div className="flex gap-4 justify-between">
				<FilterCategory category={ category } setCategory={ setCategory } />
				<FilterSort sortList={ sortList } sortFunc={ sortFunc } setSort={ setSort } />
			</div>
		</Section>
	)
}