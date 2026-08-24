import { Link } from "react-router";
import Card from "../../common/Card";
import categoryName from "../../../assets/data/categoryName.json" with { type: "json" }
import { FaCartPlus, FaStar } from "react-icons/fa";
import ButtonFilled from "../../common/ButtonFilled";
import ImgHighlight from "../../common/ImgHighlight";

export default function ProductCard({ id, name, price, category, rating, img }) {
	
	function AddToCart() {
		console.log(`${name} zum Warenkorb hinzugefügt`);
	}
	
	return (
		<Card className="gap-6">
			<Link to={ "/product/" + id }>
				<ImgHighlight src={ img } alt={ name } />
			</Link>
			<div className="flex flex-col gap-4 px-4 pb-4">
				<div className="flex justify-between items-center">
					{/** When clicked filter by category | check category exist */}
					<p className="font-secondary text-xs text-secondary cursor-pointer hover:underline hover:opacity-75">{ categoryName[category] }</p>
					<p className="flex font-secondary gap-2 items-center text-accent-1">
						{ rating }
						<FaStar />
					</p>
				</div>
				<Link to={ "/product/" + id } className="w-fit">
					<p className="text-lg font-bold hover:underline hover:opacity-75">{ name }</p>
				</Link>
				<div className="flex justify-between items-center">
					<p className="font-secondary font-bold tracking-widest text-accent-1">{ price } €</p>
					<ButtonFilled onClick={AddToCart}>
						<FaCartPlus />
					</ButtonFilled>
				</div>
			</div>
		</Card>
	)
}