export default function Button({ type = "button", onClick = null, className = "", children }) {
	return (
		<button type={ type } onClick={ onClick } className={ className + " cursor-pointer hover:opacity-75 active:scale-95 transition" } >
			{ children }
		</button>
	)
}