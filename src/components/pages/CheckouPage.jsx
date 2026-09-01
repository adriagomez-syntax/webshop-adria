import CheckoutSection from "../checkout/CheckoutSection";
import ButtonFilled from "../common/button/ButtonFilled";
import Main from "../common/Main"
import TitelHighlight from "../common/TitleHighlight";

export default function CheckoutPage({ emptyCart }) {

	return (
		<Main className="flex flex-col gap-6">
			<TitelHighlight>Checkout</TitelHighlight>
			<ButtonFilled onClick={ emptyCart }>Leer</ButtonFilled>
			<CheckoutSection />
		</Main>
	)
}