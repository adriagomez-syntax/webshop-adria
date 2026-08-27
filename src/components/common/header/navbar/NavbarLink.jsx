import { NavLink } from "react-router";

export default function NavbarLink({ name, path }) {
	return (
		<NavLink to={ path } className={({ isActive }) => isActive ? " text-accent-2 bg-background-card/50 cursor-default" : "text-accent-3 cursor-pointer hover:bg-background-card/50 active:scale-95"} >
			<li className="px-4 py-1 font-secondary text-center">
				{ name }
			</li>
		</NavLink>
	)
}