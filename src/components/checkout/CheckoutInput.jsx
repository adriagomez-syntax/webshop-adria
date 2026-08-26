import Input from "../common/Input";

export default function CheckoutInput({ type = "text", placeholder, ref, isEmpty = false }) {

	return (
		<div className="flex flex-col gap-2">
			<Input type={ type } placeholder={ placeholder } ref={ ref } />
			{isEmpty && <p className="text-2xs text-accent-1 transition duration-500">{placeholder + " darf nicht leer sein!"}</p> }
		</div>
	)
}