import { Link } from "react-router";
import ButtonFilled from "../../common/button/ButtonFilled";
import { FaArrowRight } from "react-icons/fa";

export default function CartCheckout({ totalSum }) {
	return (
		<div className="mt-4 flex flex-col gap-4 border-b border-background-card pb-4">
			<div className="flex gap-3 justify-between items-center">
				<h2 className="text-base font-bold text-text">Gesamtsumme</h2>
				<p className="font-bold text-primary text-xl">{ totalSum.toLocaleString("de-De") }€</p>
			</div>
			<Link to="/checkout" className="min-w-full flex-1 flex">
				<ButtonFilled className="flex-1 flex gap-2 justify-center items-center uppercase font-bold">
					Zur Kasse Gehen
					<FaArrowRight />
				</ButtonFilled>
			</Link>
		</div>
	)
}