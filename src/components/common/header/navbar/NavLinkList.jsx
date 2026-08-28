import { NavLink } from "react-router";

export default function NavLinkList({ name, path }) {
	return (
		<NavLink to={ path } className={({ isActive }) => isActive ? " text-secondary bg-background-card/50 cursor-default" : "cursor-pointer hover:text-primary hover:underline"}>
			<li className="px-4 py-1 text-xs">
				{ name }
			</li>
		</NavLink>
	)
}