import Button from "./Button";

export default function ButtonFilled({ type = "button", onClick = null, className = "", color = "bg-accent-2", children }) {
	return (
		<Button type={ type } onClick={ onClick } className={ className + " " + color + " p-4 rounded-md"}>
			{ children }
		</Button>
	)
}