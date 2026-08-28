export default function SideMenu({ open, setOpen, side = "left", className = "", children }) {
	
	let sideClass = ""
	let translateShow = ""
	let translateHidden = ""

	switch(side) {
	case "left":
		sideClass = "top-0 left-0 h-full min-w-70"
		translateShow = "translate-x-0"
		translateHidden = "-translate-x-full"
		break
	case "right":
		sideClass = "top-0 right-0 h-full min-w-70"
		translateShow = "translate-x-0"
		translateHidden = "translate-x-full"
		break
	case "top":
		sideClass = "top-0 left-0 w-full min-h-70"
		translateShow = "translate-y-0"
		translateHidden = "-translate-y-full"
		break
	case "bottom":
		sideClass = "bottom-0 left-0 w-full min-h-70"
		translateShow = "translate-y-0"
		translateHidden = "translate-y-full"
		break
	}
	
	return (
		<div className={(open ? "visible opacity-100" : "invisible opacity-0") + " fixed inset-0 z-100 transition"}>
			<div className="absolute inset-0 bg-black/30" onClick={ () => setOpen(false) } />
			<div className={`${open ? translateShow : translateHidden} ${sideClass} absolute p-6 flex flex-col gap-4 transform transition-transform ease-in-out duration-300 bg-background-mid`}>
				<div className={`${className} flex flex-col gap-6 h-full`}>
					{ children }
				</div>
			</div>
		</div>
	)
}