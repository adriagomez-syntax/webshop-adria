import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import Section from "../common/Section";
import LinkAnim from "../common/LinkAnim";

export default function CheckoutFooter() {
	return (
		<Section>
			<LinkAnim>
				<Link to="/cart" className="flex gap-2 items-center text-secondary">
					<FaArrowLeft />
					<p>Zurück zum Warenkorb</p>
				</Link>
			</LinkAnim>
		</Section>
	)
}