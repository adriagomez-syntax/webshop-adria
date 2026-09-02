export default function CartResumePrice({ totalSum }) {
	
	const comission = totalSum * 0.19
	
	return (
		<div className="flex flex-col gap-3 text-xs border-b border-background-card">
			<h2 className="text-text font-bold text-sm">Zusammenfassung</h2>
			<div className="flex gap-3 justify-between items-center">
				<p>Zwischensumme</p>
				<p className="text-text">{ totalSum.toLocaleString("de-De") }€</p>
			</div>
			<div className="flex gap-3 justify-between">
				<p>Versandkosten</p>
				<p className="uppercase text-primary">Kostenlos</p>
			</div>
			<div className="flex gap-3 justify-between mb-4">
				<p>Inkl. 19% MwSt.</p>
				<p>{ comission.toLocaleString("de-De") }€</p>
			</div>
		</div>
	)
}