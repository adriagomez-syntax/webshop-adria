import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import products from "../../assets/data/products.json" with { type: "json" }
import CartListRow from "./CartListRow";
import ButtonFilled from "../common/button/ButtonFilled";
import { FaTrash } from "react-icons/fa";

export default function CartListSection() {
	
	const { cartItems, setCartItems, emptyCart } = useContext(CartContext)

	function refreshList(product, quantity) {
		if (quantity <= 0) {
			setCartItems(cartItems.filter((elem) => elem.id !== product.id))
			return
		}

		setCartItems(
			cartItems.map((elem) =>
				elem.id === product.id
					? { id: elem.id, quantity: quantity }
					: elem
			)
		)
	}

	return (
		<div className="flex-1 flex flex-col min-h-20 gap-4 md:w-2/3">
			<ul className="flex flex-col gap-3">
				{ cartItems.map((item) => {

					const product = products.find(elem => elem.id === item.id)

					return (
						<CartListRow key={ item.id } product={ product } quantity={ item.quantity } refreshList={ refreshList } />
					)
				})}
			</ul>
			<div className="flex justify-end">
				<ButtonFilled className="flex gap-2 items-center" onClick={ emptyCart }>
					<FaTrash />
					<p>Leer Warenkorb</p>
				</ButtonFilled>
			</div>
		</div>
	)
}