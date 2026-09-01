export default function SidebarInputGroup({ label, display = "flex", className = "", children }) {
	return (
		<div className={`${display} flex-col gap-2`}>
			<h3 className={`${className} uppercase font-secondary font-bold text-xs tracking-widest`}>{ label }</h3>
			{ children }
		</div>
	)
}