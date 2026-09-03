import ImgHighlight from "../common/ImgHighlight";
import QuantitySelector from "../common/input/QuantitySelector";
import categoryName from "../../assets/data/categoryName.json" with { type: "json" }
import { useState } from "react";
import { Link } from "react-router";

export default function CartListRow({ product, quantity, refreshList }) {
	
	const [currentQuantity, setQuantity] = useState(quantity)
	const totalPrice = product.price * currentQuantity;

	return (
		<li className="flex gap-3 justify-between p-4 max-h-30 bg-background-mid border border-background-card rounded-md">
			<div className="flex min-w-0 gap-2">
				<Link to={`/product/${product.id}`} className="flex">
					<ImgHighlight src={ product.img } alt={ product.name } classNameParent="w-25" />
				</Link>
				<div className="min-w-0 max-w-35 md:max-w-100 flex flex-col gap-2 justify-center">
					<Link to={`/product/${product.id}`}>
						<p className="max-w-fit text-text font-bold truncate hover:underline">{ product.name }</p>
					</Link>
					<p>{ categoryName[product.category] }</p>
					<QuantitySelector quantity={ currentQuantity } setQuantity={ setQuantity } stock={ product.stock } min={ 0 } label={ false } product={ product } callback={ refreshList }  />
				</div>
			</div>
			<div className="flex flex-col gap-3 justify-center text-right">
				<p className="text-xs">x { product.price.toLocaleString("de-De") }€</p>
				<div className="flex gap-2 justify-end items-center">
					<span className="hidden text-xs md:flex">Zwischensumme: </span>
					<p className="text-primary font-bold text-lg">
						{ totalPrice.toLocaleString("de-De",{ style: "currency", currency: "EUR" }) }
					</p>
				</div>
			</div>
		</li>
	)
}