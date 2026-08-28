import ButtonBig from "./ButtonBig";

export default function ButtonOutline({ type = "button", onClick = null, disabled = false, className = "", color = "border-background-card text-text", border = "border", size = DefaultComponent, rounded = "rounded-md", children }) {
	
	const Size = size;

	return (
		<Size type = { type } onClick={ onClick } disabled={ disabled } className={`${className} ${color} ${rounded} ${border}`} >
			{ children }
		</Size>
	)	
}

function DefaultComponent(props) {
	return (<ButtonBig {...props} />)
}