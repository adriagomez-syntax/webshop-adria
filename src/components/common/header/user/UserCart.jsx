import { FaShoppingCart } from "react-icons/fa";

export default function UserCart({ quantity }) {
	
	return (
		<div className="flex gap-1 items-center">
			<FaShoppingCart />
			{ quantity > 0 &&
				<div className="bg-accent-2 px-2 py-1 rounded-md text-2xs">
					{quantity}
				</div>
			}
		</div>
	)
}