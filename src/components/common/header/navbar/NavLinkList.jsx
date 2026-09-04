import { NavLink } from "react-router";
import LinkAnim from "../../LinkAnim";

export default function NavLinkList({ name, path }) {
	return (
		<NavLink to={ path } className={({ isActive }) => isActive ? " text-secondary bg-background-card/50 cursor-default" : "cursor-pointer hover:text-primary"}>
			<li className="px-4 py-1 text-xs">
				<LinkAnim>{ name }</LinkAnim>
			</li>
		</NavLink>
	)
}