import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import ButtonOutline from "../../common/button/ButtonOutline";
import SideMenu from "../../common/SideMenu"

export default function SidebarMobile({ children }) {
	
	const [open, setOpen] = useState(false)

	return (
		<div className="md:hidden">
			<ButtonOutline 
				className="flex gap-2 items-center text-text"
				onClick={ () => setOpen(true) }
			>
				<FaFilter />
				<p>Filter</p>
			</ButtonOutline>
			<SideMenu open={ open } setOpen={ setOpen } side="left" className="justify-between">
				{ children }
			</SideMenu>
		</div>
	)
}