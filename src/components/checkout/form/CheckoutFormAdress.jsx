import CheckoutCard from "../CheckoutCard";
import CheckoutInput from "./CheckoutInput";

export default function CheckoutFormAddress({ firstNameRef, lastNameRef, addressRef, postcodeRef, cityRef, countryRef, validFirstName, validLastName, validAddress, validPostcode, validCity, validCountry }) {
	return (
		<CheckoutCard index="2" label="Lieferadresse">
			<div className="flex gap-4 justify-between">
				<CheckoutInput className="flex-1" label="Vorname" placeholder="Vorname" ref={ firstNameRef } isValid={ validFirstName } />
				<CheckoutInput className="flex-1" label="Nachname" placeholder="Nachname" ref={ lastNameRef } isValid={ validLastName } />
			</div>
			<CheckoutInput label="Straße und Hausnummer" placeholder="Straße und Hausnummer" ref={ addressRef } isValid={ validAddress } />
			<div className="flex gap-4 justify-between">
				<CheckoutInput label="PLZ" placeholder="PLZ" ref={ postcodeRef } isValid={ validPostcode } />
				<CheckoutInput className="flex-1" label="Stadt" placeholder="Stadt" ref={ cityRef } isValid={ validCity } />
			</div>
			<CheckoutInput label="Land" placeholder="Land" ref={ countryRef } isValid={ validCountry } />
		</CheckoutCard>
	)
}