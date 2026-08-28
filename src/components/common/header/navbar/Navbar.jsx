import links from "../../../../assets/data/links.json" with { type: "json" }
import NavbarLink from "./NavbarLink"

export default function Navbar({ className = "", classList = "", navComponent = NavbarLink }) {
	
	const filteredLinks = links.filter(link => link.isNav);
	const NavComponent = navComponent

	return (
		<nav className={ className }>
			<ul className={ classList }>
				{filteredLinks.map((link, index) => (
					<NavComponent key={ index } { ...link } />
				))}
			</ul>
		</nav>
	)
}