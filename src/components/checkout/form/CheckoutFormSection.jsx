import { useRef, useState } from "react"
import Section from "../../common/Section";
import CheckoutFormContact from "./CheckoutFormContact";
import CheckoutFormAddress from "./CheckoutFormAdress";
import CheckoutFormShipping from "./shipping/CheckoutFormShipping";
import CheckoutFormPay from "./pay/CheckoutFormPay";
import CheckoutOrder from "../order/CheckoutOrder";

export default function CheckoutSection() {
	
	const emailRef = useRef(null)
	const [validEmail, setValidEmail] = useState("")

	const firstNameRef = useRef(null)
	const [validFirstName, setValidFirstName] = useState("")

	const lastNameRef = useRef(null)
	const [validLastName, setValidLastName] = useState("")

	const addressRef = useRef(null)
	const [validAddress, setValidAdress] = useState("")

	const postcodeRef = useRef(null)
	const [validPostcode, setValidPostcode] = useState("")

	const cityRef = useRef(null)
	const [validCity, setValidCity] = useState("")

	const countryRef = useRef(null)
	const [validCountry, setValidCountry] = useState("")

	const [shipping, setShipping] = useState(0)

	const [pay, setPay] = useState("Card")
	
	const inputs = [
		{ id: "email", name:"E-Mail", ref: emailRef, func: setValidEmail },
		{ id: "firstName", name:"Vorname", ref: firstNameRef, func: setValidFirstName },
		{ id: "lastName", name:"Nachname", ref: lastNameRef, func: setValidLastName },
		{ id: "address", name:"Straße und Hausnummer", ref: addressRef, func: setValidAdress },
		{ id: "postcode", name:"PLZ", ref: postcodeRef, func: setValidPostcode },
		{ id: "city", name:"Stadt", ref: cityRef, func: setValidCity },
		{ id: "country", name:"Land", ref: countryRef, func: setValidCountry }
	]

	function handleSubmit(event)
	{
		event.preventDefault();

		const order = {}
		const allInputsCorrect = inputs.every(input => {
			if (input.ref.current.value === "")
			{
				input.ref.current.focus()
				input.func(`${input.name} darf nicht leer sein!`)
				return false
			}
			
			const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
			if (input.ref.current.type === "email"
				&& !input.ref.current.value.match(emailRegex)
			) {
				input.ref.current.focus()
				input.func("Ungültig E-Mail-Format!")
				return false
			}

			order[input.id] = input.ref.current.value
			input.func(false)
			return true
		})

		if (!allInputsCorrect) { return }

		order.shipping = shipping
		order.pay = pay

		console.log(order);
	}
	
	return (
		<Section className="flex flex-col">
			<form onSubmit={ handleSubmit } className="flex flex-col md:flex-row gap-6">
				<div className="md:w-2/3 flex flex-col gap-6">
					<CheckoutFormContact ref={ emailRef } isValid={ validEmail } />
					<CheckoutFormAddress 
						firstNameRef={ firstNameRef }
						lastNameRef={ lastNameRef }
						addressRef={ addressRef }
						postcodeRef={ postcodeRef }
						cityRef={ cityRef }
						countryRef={ countryRef }
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