import { Link, useLocation } from "react-router";
import links from "../../assets/data/links.json" with { type: "json" }

export default function FullPath() {
	
	const location = useLocation()
	const path = location.pathname.split("/").filter(Boolean)
	
	return (
		<div className="flex gap-1 text-2xs">
			<Link to="/" className="hover:underline">
				PixelVault
			</Link>
			{path.map((page, index) => (
				<span key={index} className="flex gap-1">
					{" / "}
					{(index === path.length - 1)
						? <p className="text-accent-3">{ links.find(link => link.path === "/" + page)?.name }</p>
						: <Link to={"/" + page} className="hover:underline">
							{ links.find(link => link.path === "/" + page)?.name }
						</Link>
					}
				</span>
			))}
		</div>
	)
}