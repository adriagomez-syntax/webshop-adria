import { useRef, useState } from "react"
import Section from "../common/Section";
import ButtonFilled from "../common/button/ButtonFilled";
import CheckoutInput from "./CheckoutInput";

export default function CheckoutSection() {
	
	const firstNameRef = useRef(null)
	const [emptyFirstName, setEmptyFirstName] = useState(false)

	const lastNameRef = useRef(null)
	const [emptyLastName, setEmptyLastName] = useState(false)

	const addressRef = useRef(null)
	const [emptyAddress, setEmptyAdress] = useState(false)

	const postcodeRef = useRef(null)
	const [emptyPostcode, setEmptyPostcode] = useState(false)

	const cityRef = useRef(null)
	const [emptyCity, setEmptyCity] = useState(false)

	const emailRef = useRef(null)
	const [emptyEmail, setEmptyEmail] = useState(false)
	
	const inputs = [
		{ name:"firstName", ref: firstNameRef, func: setEmptyFirstName },
		{ name:"lastName", ref: lastNameRef, func: setEmptyLastName },
		{ name:"address", ref: addressRef, func: setEmptyAdress },
		{ name:"postcode", ref: postcodeRef, func: setEmptyPostcode },
		{ name:"city", ref: cityRef, func: setEmptyCity },
		{ name:"email", ref: emailRef, func: setEmptyEmail }
	]

	function handleSubmit(event)
	{
		event.preventDefault();

		const order = {}
		const allCorrect = inputs.every(input => {
			if (input.ref.current.value === "")
			{
				input.ref.current.focus()
				input.func(true)
				return false
			}

			order[input.name] = input.ref.current.value
			input.func(false)
			return true
		})

		if (!allCorrect) { return }

		console.log(order);
	}
	
	return (
		<Section className="flex flex-col">
			<form onSubmit={ handleSubmit } className="flex flex-col gap-3">
				<CheckoutInput placeholder="Vorname" ref={ firstNameRef } isEmpty={ emptyFirstName } />
				<CheckoutInput placeholder="Nachname" ref={ lastNameRef } isEmpty={ emptyLastName } />
				<CheckoutInput placeholder="Straße und Hausnummer" ref={ addressRef } isEmpty={ emptyAddress } />
				<CheckoutInput placeholder="PLZ" ref={ postcodeRef } isEmpty={ emptyPostcode } />
				<CheckoutInput placeholder="Ort" ref={ cityRef } isEmpty={ emptyCity } />
				<CheckoutInput type="email" placeholder="E-Mail" ref={ emailRef } isEmpty={ emptyEmail } />
				<ButtonFilled type="submit">Bestellung prüfen</ButtonFilled>
			</form>
		</Section>
	)
}