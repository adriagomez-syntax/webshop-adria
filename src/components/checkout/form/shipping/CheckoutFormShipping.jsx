import CheckoutCard from "../../CheckoutCard";
import CheckoutShippingOption from "./CheckoutShippingOption";

export default function CheckoutFormShipping({ shipping, setShipping }) {
	
	const shippingOptions = [
		{ id: 1, name: "DHL Paket (Klassisch)", desc: "Lieferung in 2-3 Werktagen", price: 0 },
		{ id: 2, name: "DHL Express (über Nacht)", desc: "Morgen bis 12 Uhr bei dir", price: 9.99 }
	]

	const optionSel = shippingOptions.find(elem => elem.price === shipping)
	
	function handleChange(event) {
		const option = shippingOptions.find(elem => elem.id === Number(event.target.value))
		setShipping(option.price)
	}

	return (
		<CheckoutCard index="3" label="Versandart">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{ shippingOptions.map(option => (
					<CheckoutShippingOption key={option.id} handleChange={ handleChange } optionSel={ optionSel } {...option} />
				))}
			</div>
		</CheckoutCard>
	)
}