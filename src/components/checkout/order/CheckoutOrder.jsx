import { useContext } from "react";
import CartContext from "../../../contexts/CartContext";
import CheckoutCard from "../CheckoutCard";
import CheckoutCartList from "./CheckoutCartList";
import CheckoutOrderResume from "./CheckoutOrderResume";
import products from "../../../assets/data/products.json" with { type: "json" }
import CheckoutOrderTotal from "./CheckoutOrderTotal";
import CheckoutSecurity from "./CheckoutSecurity";

export default function CheckoutOrder({ shipping }) {
	
	const { cartItems } = useContext(CartContext);
	const productCost = cartItems.reduce((sum, item) => {
		const product = products.find((elem) => elem.id === item.id)
		return sum + product.price * item.quantity
	}, 0)

	const total = productCost + shipping
	
	return (
		<CheckoutCard label="Deine Bestellung">
			<CheckoutCartList />
			<CheckoutOrderResume productCost={ productCost } shipping={ shipping } />
			<CheckoutOrderTotal total={ total } />
			<CheckoutSecurity />
		</CheckoutCard>
	)
}