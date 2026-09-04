import { Link, useLocation } from "react-router";
import links from "../../assets/data/links.json" with { type: "json" }
import products from "../../assets/data/products.json" with { type: "json" }
import LinkAnim from "./LinkAnim";

export default function FullPath() {
	
	const location = useLocation()
	const path = location.pathname.split("/").filter(Boolean)
	
	return (
		<div className="flex gap-1 text-2xs md:text-sm">
			<Link to="/">
				<LinkAnim>
					PixelVault
				</LinkAnim>
			</Link>
			{path.map((page, index) => (
				<span key={index} className="flex gap-1">
					{" / "}
					{(index === path.length - 1)
						? <p className="text-accent-3">{ 
							links.find(link => link.path.includes("/" + page))?.name
							|| products.find(product => product.id === page)?.name 
						}</p>
						: <Link to={"/" + page}>
							<LinkAnim>
								{ links.find(link => link.path === "/" + page)?.name }
							</LinkAnim>
						</Link>
					}
				</span>
			))}
		</div>
	)
}