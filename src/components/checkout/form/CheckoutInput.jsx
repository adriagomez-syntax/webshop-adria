import Input from "../../common/input/Input";

export default function CheckoutInput({ className = "", label = "", type = "text", placeholder, ref, value, onChange, isValid = "" }) {

	return (
		<div className={`${className} flex`}>
			<label className="flex-1 flex flex-col gap-2 text-2xs">
				{ label }
				<Input type={ type } placeholder={ placeholder } ref={ ref } value={ value } onChange={ (event) => { onChange(event.target.value) } } />
				{isValid && <p className="text-2xs text-accent-1 transition duration-500">{ isValid }</p> }
			</label>
		</div>
	)
}