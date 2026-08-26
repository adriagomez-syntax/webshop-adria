import Button from "./Button";

export default function ButtonBig({ type = "button", onClick = null, disabled = false, className = "", children }) {
	return (
		<Button type={ type } onClick={ onClick } disabled={ disabled } className={ className + " py-2 px-4" }>
			{ children }
		</Button>
	)
}