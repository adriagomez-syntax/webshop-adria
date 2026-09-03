import Card from "../Card";
import ButtonFilled from "../button/ButtonFilled";
import ButtonLittle from "../button/ButtonLittle";
import ProductImage from "./ProductImage";
import ProductCategoryRating from "./ProductCategoryRating";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";
import ProductStock from "./ProductStock";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../../../contexts/CartContext";

export default function ProductCard({ id, name, price, offer, category, rating, stock, img }) {
	
	const { addToCart } = useContext(CartContext)

	return (
		<Card className={(stock <= 0 && "opacity-40") + " gap-6 h-95 md:h-100"}>
			<ProductImage id={ id } name={ name } stock={ stock } img={ img } />
			<div className="flex-1 flex flex-col justify-between gap-4 px-4 pb-4">
				<ProductCategoryRating category={ category } rating={ rating } disabled={ stock <= 0 } />
				<div className="flex flex-col gap-2">
					<ProductTitle id={ id } name={ name } />
					<div className="flex flex-col gap-2 mt-auto">
						<ProductStock stock={ stock } />
						<div className="flex justify-between items-center">
							<ProductPrice price={ price } offer={ offer } stock={ stock } />
							<ButtonFilled onClick={() => addToCart(id, 1) } size={ ButtonLittle } disabled={ stock <= 0 }>
								<FaCartPlus />
							</ButtonFilled>
						</div>
					</div>
				</div>
			</div>
		</Card>
	)
}