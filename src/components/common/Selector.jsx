export default function Selector({ className = "", children }) {
	return (
		<div className={className + " hover:bg-background-card/20 px-4 py-1 text-accent-1 text-center active:scale-95 cursor-pointer"}>
			{ children }
		</div>
	)
}