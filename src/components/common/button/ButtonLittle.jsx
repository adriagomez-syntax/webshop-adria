import Button from "./Button";

export default function ButtonLittle({ type = "button", onClick = null, disabled = false, className = "", children }) {
	return (
		<Button type={ type } onClick={ onClick } disabled={ disabled } className={ className + " px-2 py-1" }>
			{ children }
		</Button>
	)
}