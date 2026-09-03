export default function CheckoutOrderResume ({ productCost, shipping }) {
	return (
		<div className="flex flex-col gap-2 pb-4 text-xs border-b border-background-card">
			<div className="flex gap-2 justify-between items-end">
				<p>Zwischensumme</p>
				<p className="text-text">{ productCost.toLocaleString("de-De", { style: "currency", currency: "EUR" }) }</p>
			</div>
			<div className="flex gap-2 justify-between items-end">
				<p className="text-xs">Versandkosten</p>
				<p className={`${shipping > 0 ? "text-text" : "text-primary italic uppercase"}`}>
					{ shipping > 0
						? shipping.toLocaleString("de-De", { style: "currency", currency: "EUR" }) 
						: "Kostenlos"
					}
				</p>
			</div>
		</div>
	)
}