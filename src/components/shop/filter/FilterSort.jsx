export default function FilterSort({ sortList, sortFunc, setSort }) {
	return (
		<div className="flex gap-2 py-2 px-3 items-center justify-between bg-background-card border border-accent-3/20 rounded-md">
			<p className="text-xs text-nowrap">Sortieren nach:</p>
			<select value={ sortFunc } onChange={ event => setSort(Number(event.target.value)) } className="text-secondary">
				{sortList.map(option => (
					<option key={ option.id } value={ option.id }>{ option.name }</option>
				))}
			</select>
		</div>
	)
}