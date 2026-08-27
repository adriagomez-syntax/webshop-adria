import CategoryLabel from "../../common/CategoryLabel";
import categoryName from "../../../assets/data/categoryName.json" with { type: "json" }
import { FaStar } from "react-icons/fa";

export default function ProductCategoryRating({ category, rating, disabled }) {
	return (
		<div className="flex justify-between items-center">
			{/** When clicked filter by category | check category exist */}
			<CategoryLabel disabled={ disabled }>{ categoryName[category] }</CategoryLabel>
			<p className={(!disabled && "text-accent-1") + " flex font-secondary gap-2 items-center"}>
				<FaStar />
				{ rating.toLocaleString("de-De") }
			</p>
		</div>
	)
}