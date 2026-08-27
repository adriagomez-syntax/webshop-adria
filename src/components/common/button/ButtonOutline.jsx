import ButtonBig from "./ButtonBig";

export default function ButtonOutline({ type = "button", onClick = null, disabled = false, className = "", color = "border-accent-2/20", size = DefaultComponent, children }) {
	
	const Size = size;

	return (
		<Size type = { type } onClick={ onClick } disabled={ disabled } className={ className + " " + color + " border rounded-md"} >
			{ children }
		</Size>
	)	
}

function DefaultComponent(props) {
	return (<ButtonBig {...props} />)
}