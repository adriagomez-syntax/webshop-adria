import { FaShieldAlt, FaStar, FaTruck } from "react-icons/fa";
import CategoryLabel from "../../common/CategoryLabel";
import ImgHighlight from "../../common/ImgHighlight";
import TitelHighlight from "../../common/TitleHighlight";
import categoryName from "../../../assets/data/categoryName.json" with { type: "json" }
import FullPath from "../../common/FullPath";
import Section from "../../common/Section";
import ProductStock from "../../shop/product/ProductStock";
import DetailsButtons from "./DetailsButtons";

export default function DetailsHero({ id, img, name, category, offer, price, rating, reviews, stock }) {
	return (
		<Section className="flex flex-col gap-4">
			<FullPath />
			<div className="flex flex-col gap-4 md:max-h-100 md:flex-row md:justify-between md:gap-14">
				<ImgHighlight src={ img } alt={ name } classNameParent="rounded-md border border-secondary flex-1" />
				<div className="flex-1 flex flex-col gap-4">
					<div className="flex flex-col gap-4 pb-4 border-b border-background-card">
						<div className="flex gap-4">
							<CategoryLabel>{ categoryName[category] }</CategoryLabel>
							<div className="flex gap-1 items-center">
								<p className="flex gap-1 items-center font-secondary text-primary text-xs">
									{ rating }
									<FaStar />
								</p>
								<p className="text-2xs">({reviews} Reviews)</p>
							</div>
						</div>
						<TitelHighlight>{ name }</TitelHighlight>
						<div className="flex gap-2 items-end">
							{ offer > 0 &&
								<span className="text-xs line-through">{ offer.toLocaleString("de-De", { style: "currency", currency: "EUR" }) }</span>
							}
							<h2 className="font-secondary font-bold tracking-widest text-3xl text-primary">{ price } €</h2>
						</div>
						<ProductStock stock={ stock } />
						<DetailsButtons id={ id } stock={ stock } />
					</div>
					<div className="flex justify-between items-center">
						<div className="flex gap-1 items-center text-2xs">
							<FaTruck className="text-primary" />
							<p>DHL Expressversand</p>
						</div>
						<div className="flex gap-1 items-center text-2xs">
							<FaShieldAlt className="text-primary" />
							<p>Geprüft & Gereinigt</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}