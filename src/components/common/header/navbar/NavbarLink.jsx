import { NavLink } from "react-router";
import Selector from "../../Selector";

export default function NavbarLink({ name, path }) {
	return (
		<NavLink to={ path } className="text-black">
			<Selector>
				<li className="">
					{ name }
				</li>
			</Selector>
		</NavLink>
	)
}