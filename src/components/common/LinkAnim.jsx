export default function LinkAnim({ className = "", children }) {
	return(
		<div className={ className + " hover:underline hover:opacity-75" }>
			{ children }
		</div>
	)
}