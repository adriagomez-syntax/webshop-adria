import CheckoutInput from "./CheckoutInput";
import CheckoutCard from "../CheckoutCard";

export default function CheckoutFormContact({ ref, isValid }) {
	return (
		<CheckoutCard index="1" label="Kontaktdaten">
			<CheckoutInput label="E-Mail-Adresse für Versandbestätigung" type="email" placeholder="E-Mail" ref={ ref } isValid={ isValid } />
		</CheckoutCard>
	)
}