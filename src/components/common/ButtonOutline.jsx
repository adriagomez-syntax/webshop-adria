import Button from "./Button"

export default function ButtonOutline({ type = "button", onClick = null, className = "", color = "border-accent-2/20", children }) {
	return (
		<Button type = { type } onClick={ onClick } className={ className + " " + color + " py-2 px-4 border rounded-md" }>
			{ children }
		</Button>
	)
}