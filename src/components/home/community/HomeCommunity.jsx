import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import products from "../../../assets/data/products.json" with { type: "json" }

export default function HomeCommunity({ productId, img, name, rating, comment }) {
	
	const product = products.find(item => item.id === productId)
	
	return (
		<div className="flex flex-col h-40 gap-4 p-4 border border-background-card bg-background-mid rounded-md">
			<div className="flex gap-2 justify-between items-center">
				<div className="flex gap-2 w-2/3">
					<img src={ img } className="rounded-full object-cover aspect-square w-10" alt={ name } />
					<div className="w-full flex flex-col gap-1">
						<p className="text-text font-bold">{ name }</p>
						<Link to={`/product/${productId}`} className="w-full text-secondary hover:underline">
							<p className="truncate">{ product.name }</p>
						</Link>
					</div>
				</div>
				<div className="flex gap-1 w-1/3 text-primary justify-end items-center">
					{ rating }
					<FaStar />
				</div>
			</div>
			<p className="text-text text-xs line-clamp-4">{ comment }</p>
		</div>
	)
}