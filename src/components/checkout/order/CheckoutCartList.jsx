import { useContext } from "react";
import CartContext from "../../../contexts/CartContext";
import products from "../../../assets/data/products.json" with { type: "json" }
import CheckoutCartRow from "./CheckoutCartRow";

export default function CheckoutCartList() {
	
	const { cartItems } = useContext(CartContext); 
	
	return (
		<ul className="flex flex-col gap-2 border-b border-background-card pb-4">
			{ cartItems.map(item => {
				
				const product = products.find(prod => prod.id === item.id)
				
				return (
					<CheckoutCartRow key={ item.id } quantity={ item.quantity } {...product} />
				)
			})}
		</ul>
	)
}