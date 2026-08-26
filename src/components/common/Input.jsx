export default function Input({ type = "text", onChange = null, min = "", max = "", placeholder = "", maxLength = "", value = "", className = "" }) {
	return (
		<input type={ type } onChange={ onChange } min={ min } max={ max } placeholder={ placeholder } maxLength={ maxLength } value={ value } className={ className + " text-xs text-center px-2 py-1 border border-secondary rounded-md"} />
	)
}