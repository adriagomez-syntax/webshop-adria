import { Link } from "react-router";
import ButtonFilled from "../../common/button/ButtonFilled";

export default function CartCheckout({ totalSum }) {
	return (
		<div className="mt-4 flex flex-col gap-4 border-b border-background-card pb-4">
			<div className="flex gap-3 justify-between items-center">
				<h2 className="text-base font-bold text-text">Gesamtsumme</h2>
				<p className="font-bold text-primary text-xl">{ totalSum.toLocaleString("de-De", { style: "currency", currency: "EUR" }) }</p>
			</div>
			<Link to="/cart/checkout" className="min-w-full flex-1 flex">
				<ButtonFilled className="flex-1 flex gap-2 justify-center items-center uppercase font-secondary font-bold">
					Zur Kasse Gehen
				</ButtonFilled>
			</Link>
		</div>
	)
}