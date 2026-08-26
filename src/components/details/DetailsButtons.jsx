import ButtonFilled from "../common/ButtonFilled";
import ButtonOutline from "../common/ButtonOutline";
import { Link } from "react-router";
import { FaArrowLeft, FaCartPlus } from "react-icons/fa";

export default function DetailsButtons({ addToCart }) {
	return (
		<div className="flex gap-4">
			<Link to="/shop" className="flex">
				<ButtonOutline className="flex gap-2 items-center">
					<FaArrowLeft />
					{"Zurück"}
				</ButtonOutline>
			</Link>
			<ButtonFilled onClick={addToCart} className="flex gap-2 items-center">
				<FaCartPlus />
				{"In den Warenkorb"}
			</ButtonFilled>
		</div>
	)
}