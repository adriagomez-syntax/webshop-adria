import ButtonBig from "./ButtonBig";

export default function ButtonFilled({ type = "button", onClick = null, disabled = false, className = "", color = "bg-accent-2 text-text", rounded = "rounded-md", size = DefaultComponent, children }) {
	
	const Size = size;
	
	return (
		<Size type={ type } onClick={ onClick } disabled={ disabled } className={`${className} ${color} ${rounded} p-4`}>
			{ children }
		</Size>
	)
}

function DefaultComponent(props) {
	return ( <ButtonBig {...props} /> )
}