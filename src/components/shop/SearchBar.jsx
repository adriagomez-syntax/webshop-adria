import { FaSearch } from "react-icons/fa"
import Input from "../common/Input"

export default function SearchBar({ searchValue, setSearch }) {
	
	
	return (
		<div className="flex gap-0 w-full">
			<div className="flex justify-center items-center border-l border-y border-secondary px-2 py-2 rounded-l-md">
				<FaSearch className="text-center" />
			</div>
			<Input className="w-full" border="border border-secondary rounded-r-md"
				placeholder="Suchen..."
				onChange={ (event) => setSearch(event.target.value) }
				value={ searchValue } />
		</div>
	)
}