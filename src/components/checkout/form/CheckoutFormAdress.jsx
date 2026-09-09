import CheckoutCard from "../CheckoutCard";
import CheckoutInput from "./CheckoutInput";

export default function CheckoutFormAddress({ firstNameRef, firstName, setFirstName, lastNameRef, lastName, setLastName, addressRef, address, setAddress, postcodeRef, postcode, setPostcode, cityRef, city, setCity, countryRef, country, setCountry, validFirstName, validLastName, validAddress, validPostcode, validCity, validCountry }) {
	return (
		<CheckoutCard index="2" label="Lieferadresse">
			<div className="flex gap-4 justify-between">
				<CheckoutInput className="flex-1" label="Vorname" placeholder="Vorname" ref={ firstNameRef } value={ firstName } onChange={ setFirstName } isValid={ validFirstName } />
				<CheckoutInput className="flex-1" label="Nachname" placeholder="Nachname" ref={ lastNameRef } value={ lastName } onChange={ setLastName }  isValid={ validLastName } />
			</div>
			<CheckoutInput label="Straße und Hausnummer" placeholder="Straße und Hausnummer" ref={ addressRef } value={ address } onChange={ setAddress }  isValid={ validAddress } />
			<div className="flex gap-4 justify-between">
				<CheckoutInput label="PLZ" placeholder="PLZ" ref={ postcodeRef } value={ postcode } onChange={ setPostcode }  isValid={ validPostcode } />
				<CheckoutInput className="flex-1" label="Stadt" placeholder="Stadt" ref={ cityRef } value={ city } onChange={ setCity }  isValid={ validCity } />
			</div>
			<CheckoutInput label="Land" placeholder="Land" ref={ countryRef } value={ country } onChange={ setCountry }  isValid={ validCountry } />
		</CheckoutCard>
	)
}