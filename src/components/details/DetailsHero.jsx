import { FaStar } from "react-icons/fa";
import CategoryLabel from "../common/CategoryLabel";
import ImgHighlight from "../common/ImgHighlight";
import TitelHighlight from "../common/TitleHighlight";
import categoryName from "../../assets/data/categoryName.json" with { type: "json" }

export default function DetailsHero({ img, name, category, description, price, rating, stock }) {
	return (
		<div className="flex flex-col gap-6">
			<ImgHighlight src={ img } alt={ name } />
			<TitelHighlight>{ name }</TitelHighlight>
			<h2 className="font-secondary font-bold tracking-widest text-xl text-accent-1">{ price } €</h2>
			<p>{ description }</p>
			<div>
				<CategoryLabel>{ categoryName[category] }</CategoryLabel>
			</div>
			<div className="flex gap-4">
				<p>Bewertung: </p>
				<p className="flex gap-1 items-center font-secondary text-accent-1">
					{ rating }
					<FaStar />
				</p>
			</div>
		</div>
	)
}