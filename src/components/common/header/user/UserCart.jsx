import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../../../contexts/CartContext";

export default function UserCart() {
	
	const { cartItems } = useContext(CartContext)
	const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

	return (
		<div className="flex gap-1 items-center">
			<FaShoppingCart />
			{ cartCount > 0 &&
				<div className="bg-accent-2 px-2 py-1 rounded-md text-2xs">
					{ cartCount }
				</div>
			}
		</div>
	)
}