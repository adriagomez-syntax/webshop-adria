import Button from "./Button";

export default function ButtonBig({ type = "button", onClick = null, className = "", children }) {
	return (
		<Button type={ type } onClick={ onClick } className={ className + " py-2 px-4" }>
			{ children }
		</Button>
	)
}