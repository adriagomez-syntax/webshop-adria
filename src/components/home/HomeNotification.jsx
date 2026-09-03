import { useRef, useState } from "react";
import Input from "../common/input/Input";
import Section from "../common/Section";
import ButtonFilled from "../common/button/ButtonFilled";

export default function HomeNotification() {
	
	const emailRef = useRef(null)
	const [ emailError, setEmailError ] = useState("")

	function handleSubmit(event) {

		event.preventDefault();

		if (emailRef.current.value === "") {
			emailRef.current.focus()
			setEmailError("E-Mail-Adresse darf nicht ller sein!")
			return
		}

		const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
		if (!emailRef.current.value.match(emailRegex)) {
			emailRef.current.focus()
			setEmailError("Ungültig E-Mail-Format!")
			return
		}

		console.log(`${emailRef.current.value} schon abonniert!`)
	}

	return (
		<Section className="mt-8">
			<div className="flex flex-col md:flex-row gap-4 p-4 border border-accent-2 bg-background-mid rounded-md">
				<div className="flex flex-col gap-2">
					<h3 className="text-text font-secondary tracking-widest font-bold">Bleib auf dem Laufenden</h3>
					<p className="text-xs">Abonniere unseren Pixel-Newsletter und sichere dir exklusive Vorkaufsrechte für limitierte OVP-Drops, Rabatt-Deals und Sammlungsauflösungen!</p>
				</div>
				<form onSubmit={ handleSubmit } className="flex flex-col md:flex-row gap-4">
					<div className="flex flex-col gap-1 justify-center">
						<Input type="email" placeholder="Deine E-Mail-Adresse" ref={ emailRef } />
						{ emailError !== "" &&
							<p className="text-2xs text-accent-1">{ emailError }</p>
						}
					</div>
					<div className="flex items-center">
						<ButtonFilled type="submit" className="flex-1">Abonnieren</ButtonFilled>
					</div>
				</form>
			</div>
		</Section>
	)
}