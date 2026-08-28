import { FiMenu } from "react-icons/fi";
import Button from "../button/Button";
import Logo from "./Logo";
import Navbar from "./navbar/Navbar";
import User from "./user/User";
import { useState } from "react";
import SideMenu from "../SideMenu";
import NavLinkList from "./navbar/NavLinkList";

export default function Header() {
	
	const [openNavMenu, setOpenNavMenu] = useState(false)
	
	return (
		<header className="fixed min-w-full min-h-10 p-4 z-50 bg-background border-b border-background-card">
			<div className="flex justify-between items-center md:mx-40">
				<Logo />
				<Navbar className="hidden md:flex" classList="flex gap-2" />
				<div className="flex gap-4">
					<User />
					<Button className="text-text md:hidden hover:text-accent-3" onClick={ () => setOpenNavMenu(true) }>
						<FiMenu />
					</Button>
				</div>
			</div>
			<SideMenu side="right" open={ openNavMenu } setOpen={ setOpenNavMenu }>
				<div className="flex flex-col gap-2">
					<h2 className="text-text uppercase font-bold font-secondary tracking-widest">Navigation</h2>
					<Navbar classList="flex flex-col gap-0" navComponent={ NavLinkList } />
				</div>
			</SideMenu>
		</header>
	)
}