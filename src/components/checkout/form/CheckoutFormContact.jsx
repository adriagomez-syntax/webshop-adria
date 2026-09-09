import CheckoutInput from "./CheckoutInput";
import CheckoutCard from "../CheckoutCard";

export default function CheckoutFormContact({ ref, value, onChange, isValid }) {
	return (
		<CheckoutCard index="1" label="Kontaktdaten">
			<CheckoutInput label="E-Mail-Adresse für Versandbestätigung" type="email" placeholder="E-Mail" ref={ ref } value={ value } onChange={ onChange } isValid={ isValid } />
		</CheckoutCard>
	)
}