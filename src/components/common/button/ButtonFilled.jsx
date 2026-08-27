import ButtonBig from "./ButtonBig";

export default function ButtonFilled({ type = "button", onClick = null, disabled = false, className = "", color = "bg-accent-2", size = DefaultComponent, children }) {
	
	const Size = size;
	
	return (
		<Size type={ type } onClick={ onClick } disabled={ disabled } className={ className + " " + color + " p-4 rounded-md"}>
			{ children }
		</Size>
	)
}

function DefaultComponent(props) {
	return ( <ButtonBig {...props} /> )
}