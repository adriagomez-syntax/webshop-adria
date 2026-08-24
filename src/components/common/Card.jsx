export default function Card({ className = "", children }) {
	return (
		<div className={className + " flex flex-col gap-2 overflow-hidden bg-background-card border border-accent-3/20 rounded-md"}>
			{ children }
		</div>
	)
}