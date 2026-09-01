import Section from "../../common/Section";
import SearchBar from "./SearchBar";
import FilterCategory from "./FilterCategory"
import FilterSort from "./FilterSort";

export default function FilterSection() {
	return (
		<Section className="gap-4">
			<SearchBar />
			<div className="flex gap-4 justify-between">
				<FilterCategory />
				<FilterSort />
			</div>
		</Section>
	)
}