export default function Button({ type = "button", onClick = null, disabled = false, className = "", children }) {
	return (
		<button type={ type } onClick={ onClick } disabled={ disabled } className={ className + " cursor-pointer hover:not-disabled:opacity-75 active:not-disabled:scale-95 transition ease-out duration-300 disabled:cursor-not-allowed disabled:opacity-40" } >
			{ children }
		</button>
	)
}