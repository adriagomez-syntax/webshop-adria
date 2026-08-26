export default function Input({ type = "text", onChange = null, min = "", max = "", border = "border border-secondary rounded-md", placeholder = "", maxLength = "", value = "", ref = null, className = "" }) {
	return (
		<input type={ type } onChange={ onChange || undefined } min={ min } max={ max } placeholder={ placeholder } maxLength={ maxLength } ref={ ref }
			className={ className + " " + border + " text-xs px-2 py-1"} 
			{...(onChange
				? { value: value }
				: { defaultValue: value }
			)}
		/>
	)
}