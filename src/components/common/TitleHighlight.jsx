export default function TitelHighlight({ className = "", color = "text-text", children }) {
	return (
		<h1 className={ className + " " + color +" font-secondary text-3xl font-bold tracking-widest uppercase" }>
			{ children }
		</h1>
	)
}