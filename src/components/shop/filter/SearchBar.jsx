import { FaSearch } from "react-icons/fa"
import Input from "../../common/Input"
import { FaX } from "react-icons/fa6";
import Button from "../../common/button/Button";

export default function SearchBar({ searchValue, setSearch }) {

	function clearSearch(){
		setSearch("");
	}

	return (
		<div className="flex gap-0 w-full">
			<div className="flex justify-center items-center border-l border-y border-background-card px-2 py-2 rounded-l-md">
				<FaSearch className="text-center" />
			</div>
			<Input className="w-full" border="border-y border-background-card"
				placeholder="Suchen..."
				onChange={ (event) => setSearch(event.target.value) }
				value={ searchValue } 
			/>
			<div className="flex justify-center items-center border-r border-y border-background-card px-2 py-2 rounded-r-md">
				<Button onClick={ clearSearch }>
					{searchValue !== "" && <FaX className="text-2xs text-accent-1/50" />}
				</Button>
			</div>
		</div>
	)
}