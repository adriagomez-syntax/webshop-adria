import links from "../../../../assets/data/links.json" with { type: "json" }
import NavbarLink from "./NavbarLink"

export default function Navbar() {
	
	const filteredLinks = links.filter(link => link.isNav);
	
	return (
		<nav>
			<ul className="flex gap-2">
				{filteredLinks.map((link, index) => (
					<NavbarLink key={ index } { ...link } />
				))}
			</ul>
		</nav>
	)
}