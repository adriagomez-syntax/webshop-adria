import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import Section from "../common/Section";

export default function CartFooter() {
	return (
		<Section>
			<Link to="/product" className="flex gap-2 items-center text-secondary hover:underline">
				<FaArrowLeft />
				<p>Weiter einkaufen</p>
			</Link>
		</Section>
	)
}