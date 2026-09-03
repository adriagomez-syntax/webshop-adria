import ButtonFilled from "../../common/button/ButtonFilled";

export default function CheckoutOrderTotal({ total }) {
	return (
		<div className="flex flex-col gap-2 border-b border-background-card pb-4">
			<div className="flex gap-2 justify-between">
				<p className="text-text font-bold">Gesamtsumme</p>
				<p className="font-secondary tracking-widest text-primary text-lg">{ total.toLocaleString("de-De", { style: "currency", currency: "EUR" }) }</p>
			</div>
			<ButtonFilled type="submit" className="font-secondary font-bold uppercase">Bestellung prüfen</ButtonFilled>
		</div>
	)
}