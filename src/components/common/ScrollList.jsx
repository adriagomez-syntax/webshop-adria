export default function ScrollList({ list, width = "w-[50vw] md:w-[15vw]", itemComponent }) {
	
	const duplicated = [...list, ...list]
	const ItemComponent = itemComponent

	return (
		<div className="py-4 overflow-hidden w-full mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
			<div className="flex animate-scroll w-max">
				<ul className="flex gap-2">
					{ duplicated.map((item, index) => (
						<li key={ index } className={`${width} shrink-0`}>
							<ItemComponent {...item} />
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}