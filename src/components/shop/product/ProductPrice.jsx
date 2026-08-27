export default function ProductPrice({ price, offer, stock }) {
	return (
		<div className="flex flex-col gap-1">
			{offer > 0 &&
				<span className="text-xs line-through opacity-40">{ offer.toLocaleString("de-De") } €</span>
			}
			<p className={(stock > 0 && "text-accent-1") + " font-secondary font-bold tracking-widest"}>{ price.toLocaleString("de-De") } €</p>
		</div>
	)
}