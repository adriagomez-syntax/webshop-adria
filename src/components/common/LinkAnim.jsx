export default function LinkAnim({ className = "", children }) {
	return(
		<p className={ className + " hover:underline hover:opacity-75" }>
			{ children }
		</p>
	)
}