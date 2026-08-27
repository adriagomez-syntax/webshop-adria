import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import ButtonOutline from "../../common/button/ButtonOutline";

export default function SidebarMobile({ children }) {
	
	const [open, setOpen] = useState(false)

	return (
		<div>
			<ButtonOutline 
				className="md:hidden flex gap-2 items-center text-text"
				onClick={ () => setOpen(true) }
			>
				<FaFilter />
				<p>Filter</p>
			</ButtonOutline>
			<div className={(open ? "visible opacity-100" : "invisible opacity-0") + " fixed inset-0 z-100 transition"}>
				<div className="absolute inset-0 bg-black/30" onClick={ () => setOpen(false) } />
				<div className={(open ? "translate-x-0" : "-translate-x-full") + " absolute t-0 l-0 h-full min-w-70 p-6 flex flex-col gap-4 transform transition-transform ease-in-out duration-300 bg-background-card"}>
					<div className="flex flex-col gap-6 justify-between h-full">
						{ children }
					</div>
				</div>
			</div>
		</div>
	)
}