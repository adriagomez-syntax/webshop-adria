export default function ProductPrice({ price, offer, stock }) {
	return (
		<div className="flex flex-col gap-1">
			{offer > 0 &&
				<span className="text-xs line-through opacity-40">{ offer.toLocaleString("de-De", { style: "currency", currency: "EUR" }) }</span>
			}
			<p className={(stock > 0 && "text-primary") + " font-secondary font-bold tracking-widest"}>{ price.toLocaleString("de-De", { style: "currency", currency: "EUR" }) }</p>
		</div>
	)
}