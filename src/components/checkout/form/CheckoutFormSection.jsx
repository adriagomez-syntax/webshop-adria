import { useRef, useState } from "react"
import Section from "../../common/Section";
import CheckoutFormContact from "./CheckoutFormContact";
import CheckoutFormAddress from "./CheckoutFormAdress";
import CheckoutFormShipping from "./shipping/CheckoutFormShipping";
import CheckoutFormPay from "./pay/CheckoutFormPay";
import CheckoutOrder from "../order/CheckoutOrder";

export default function CheckoutSection() {
	
	const emailRef = useRef(null)
	const [email, setEmail] = useState("")
	const [validEmail, setValidEmail] = useState("")

	const firstNameRef = useRef(null)
	const [firstName, setFirstName] = useState("")
	const [validFirstName, setValidFirstName] = useState("")

	const lastNameRef = useRef(null)
	const [lastName, setLastName] = useState("")
	const [validLastName, setValidLastName] = useState("")

	const addressRef = useRef(null)
	const [address, setAdress] = useState("")
	const [validAddress, setValidAdress] = useState("")

	const postcodeRef = useRef(null)
	const [postcode, setPostcode] = useState("")
	const [validPostcode, setValidPostcode] = useState("")

	const cityRef = useRef(null)
	const [city, setCity] = useState("")
	const [validCity, setValidCity] = useState("")

	const countryRef = useRef(null)
	const [country, setCountry] = useState("")
	const [validCountry, setValidCountry] = useState("")

	const [shipping, setShipping] = useState(0)

	const [pay, setPay] = useState("Card")
	
	const inputs = [
		{ id: "email", name:"E-Mail", ref: emailRef, value: email, setter: setEmail, func: setValidEmail },
		{ id: "firstName", name:"Vorname", ref: firstNameRef, value: firstName, setter: setFirstName, func: setValidFirstName },
		{ id: "lastName", name:"Nachname", ref: lastNameRef, value: lastName, setter: setLastName, func: setValidLastName },
		{ id: "address", name:"Straße und Hausnummer", ref: addressRef, value: address, setter: setAdress, func: setValidAdress },
		{ id: "postcode", name:"PLZ", ref: postcodeRef, value: postcode, setter: setPostcode, func: setValidPostcode },
		{ id: "city", name:"Stadt", ref: cityRef, value: city, setter: setCity, func: setValidCity },
		{ id: "country", name:"Land", ref: countryRef, value: country, setter: setCountry, func: setValidCountry }
	]

	function handleSubmit(event)
	{
		event.preventDefault();

		const order = {}
		const allInputsCorrect = inputs.every(input => {
			if (input.value === "")
			{
				input.ref.current.focus()
				input.func(`${input.name} darf nicht leer sein!`)
				return false
			}
			
			const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
			if (input.ref.current.type === "email"
				&& !input.value.match(emailRegex)
			) {
				input.ref.current.focus()
				input.func("Ungültig E-Mail-Format!")
				return false
			}

			order[input.id] = input.value
			input.func(false)
			return true
		})

		if (!allInputsCorrect) { return }

		order.shipping = shipping
		order.pay = pay

		console.log(order);

		// Reset all inputs on submit send
		inputs.forEach((input) => {
			input.setter("");
		})
	}
	
	return (
		<Section className="flex flex-col">
			<form onSubmit={ handleSubmit } className="flex flex-col md:flex-row gap-6">
				<div className="md:w-2/3 flex flex-col gap-6">
					<CheckoutFormContact ref={ emailRef } value={ email } onChange={ setEmail } isValid={ validEmail } />
					<CheckoutFormAddress 
						firstNameRef={ firstNameRef }
						firstName={ firstName }
						setFirstName={ setFirstName }
						lastNameRef={ lastNameRef }
						lastName={ lastName }
						setLastName={ setLastName }
						addressRef={ addressRef }
						address={ address }
						setAddress={ setAdress }
						postcodeRef={ postcodeRef }
						postcode={ postcode }
						setPostcode={ setPostcode }
						cityRef={ cityRef }
						city={ city }
						setCity={ setCity }
						countryRef={ countryRef }
						country={ country }
						setCountry={ setCountry }
						validFirstName={ validFirstName }
						validLastName={ validLastName }
						validAddress={ validAddress }
						validPostcode={ validPostcode }
						validCity={ validCity }
						validCountry={ validCountry }
					/>
					<CheckoutFormShipping shipping={ shipping } setShipping={ setShipping } />
					<CheckoutFormPay pay={ pay } setPay={ setPay } />
				</div>
				<div className="md:w-1/3">
					<CheckoutOrder shipping={ shipping } />
				</div>
			</form>
		</Section>
	)
}