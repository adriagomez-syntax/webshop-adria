import links from "../../../../assets/data/links.json" with { type: "json" }
import NavbarLink from "./NavbarLink"

export default function Navbar() {
	return (
		<nav>
			<ul className="flex gap-2">
				{links.map((link, index) => (
					<NavbarLink key={ index } { ...link } />
				))}
			</ul>
		</nav>
	)
}