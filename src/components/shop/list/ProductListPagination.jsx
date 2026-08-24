import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ButtonOutline from "../../common/ButtonOutline";

export default function ProductListPagination() {
	return (
		<div className="flex gap-2 justify-between">
			<ButtonOutline className="flex gap-2 items-center">
				<FaArrowLeft />
				Zurück
			</ButtonOutline>
			<ul className="flex gap-2">
				<li>
					<ButtonOutline>1</ButtonOutline>
				</li>
				<li>
					<ButtonOutline>2</ButtonOutline>
				</li>
				<li>...</li>
				<li>
					<ButtonOutline>16</ButtonOutline>
				</li>
			</ul>
			<ButtonOutline className="flex gap-2 items-center" color="border-secondary">
				Weiter
				<FaArrowRight />
			</ButtonOutline>
		</div>
	)
}