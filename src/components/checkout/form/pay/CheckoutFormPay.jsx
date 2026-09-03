import { FaCreditCard, FaPaypal } from "react-icons/fa";
import CheckoutCard from "../../CheckoutCard";
import CheckoutPayOption from "./CheckoutPayOption";

export default function CheckoutFormPay({ pay, setPay }) {
	
	const payMethods = [
		{ id: "Card", name: "Kreditkarte", icon: FaCreditCard },
		{ id: "PayPal", name: "Paypal", icon: FaPaypal }
	]

	const optionSel = payMethods.find(elem => elem.id === pay)

	function handleChange(event) {
		setPay(event.target.value)
	}
	
	return (
		<CheckoutCard index="4" label="Zahlungsmethode">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{ payMethods.map(method => (
					<CheckoutPayOption key={ method.id } optionSel={ optionSel } handleChange={ handleChange } {...method} />
				))}
			</div>
		</CheckoutCard>
	)
}