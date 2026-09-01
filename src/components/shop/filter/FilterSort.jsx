import { useContext } from "react"
import ProductContext from "../../../contexts/ProductContext"

export default function FilterSort() {
	
	const { sortList, sortSel, setSort } = useContext(ProductContext)

	return (
		<div className="flex gap-2 py-2 px-3 items-center justify-between bg-background-mid border border-background-card rounded-md">
			<p className="text-xs text-nowrap">Sortieren nach:</p>
			<select value={ sortSel } onChange={ event => setSort(Number(event.target.value)) } className="text-secondary">
				{sortList.map(option => (
					<option key={ option.id } value={ option.id }>{ option.name }</option>
				))}
			</select>
		</div>
	)
}