import { useContext } from "react";
import CheckoutSection from "../checkout/CheckoutSection";
import ButtonFilled from "../common/button/ButtonFilled";
import Main from "../common/Main"
import TitelHighlight from "../common/TitleHighlight";
import CartContext from "../../contexts/CartContext";

export default function CheckoutPage() {

	const { emptyCart } = useContext(CartContext)

	return (
		<Main className="flex flex-col gap-6">
			<TitelHighlight>Checkout</TitelHighlight>
			<ButtonFilled onClick={ () => emptyCart() }>Leer</ButtonFilled>
			<CheckoutSection />
		</Main>
	)
}