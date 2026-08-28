import { FaCartPlus } from "react-icons/fa";
import ButtonFilled from "../../common/button/ButtonFilled";
import DetailsQuantity from "./DetailsQuantity";
import { useState } from "react";

export default function DetailsButtons({ name, stock }) {
	
	const [ quantity, setQuantity ] = useState(1)
		
	function addToCart() {
		console.log(`${quantity}x ${name} zum Warenkorb hinzugefügt`);
	}
	
	return (
		<div className="flex flex-col gap-4">
			{ stock > 0 &&
				<DetailsQuantity stock={ stock } quantity={ quantity } setQuantity={ setQuantity } />
			}
			<ButtonFilled onClick={ addToCart } className="flex gap-2 items-center justify-center max-w-full overflow-hidden" disabled={ stock < 1 }>
				<FaCartPlus className="shrink-0" />
				<p className="text-center text-nowrap overflow-x-hidden text-ellipsis">In den Warenkorb</p>
			</ButtonFilled>
		</div>
	)
}