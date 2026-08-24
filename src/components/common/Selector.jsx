export default function Selector({ className = "", children }) {
	return (
		<div className={className + " px-4 py-1 font-secondary text-accent-3 text-center hover:bg-background-card/20 active:scale-95 cursor-pointer"}>
			{ children }
		</div>
	)
}