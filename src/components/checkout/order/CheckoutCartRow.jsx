import { Link } from "react-router"
import ImgHighlight from "../../common/ImgHighlight"
import categoryName from "../../../assets/data/categoryName.json" with { type: "json" }
import LinkAnim from "../../common/LinkAnim"

export default function CheckoutCartRow({ quantity, id, name, img, category, price }) {
	
	const cost = price * quantity
	
	return (
		<li className="flex gap-2 justify-between items-center">
			<div className="w-2/3 flex gap-2 items-center">
				<Link to={`/product/${id}`}>
					<ImgHighlight src={ img } alt={ name } classNameParent="rounded-md" className="max-h-15 min-w-15" />
				</Link>
				<div className="overflow-hidden">
					<p className="flex gap-1">
						<span>{ quantity }x</span>
						<Link to={`/product/${id}`} className="flex-1 min-w-0 text-text truncate font-bold">
							<LinkAnim>{ name }</LinkAnim>
						</Link>
					</p>
					<p>{ categoryName[category] }</p>
				</div>
			</div>
			<p className="w-1/3 text-text text-right text-xs">{ cost.toLocaleString("de-De", { style: "currency", currency: "EUR" }) }</p>
		</li>
	)
}