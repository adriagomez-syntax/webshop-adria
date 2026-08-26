import CheckoutSection from "../checkout/CheckoutSection";
import Main from "../common/Main"
import TitelHighlight from "../common/TitleHighlight";

export default function CheckoutPage() {

	return (
		<Main className="flex flex-col gap-6">
			<TitelHighlight>Checkout</TitelHighlight>
			<CheckoutSection />
		</Main>
	)
}