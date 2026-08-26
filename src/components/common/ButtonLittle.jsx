import Button from "./Button";

export default function ButtonLittle({ type = "button", onClick = null, className = "", children }) {
	return (
		<Button type={ type } onClick={ onClick } className={ className + " px-2 py-1" }>
			{ children }
		</Button>
	)
}