export default function TitelHighlight({ className = "", color = "text-primary", children }) {
	return (
		<h1 className={ className + " " + color +" font-secondary text-4xl font-bold tracking-widest uppercase" }>
			{ children }
		</h1>
	)
}