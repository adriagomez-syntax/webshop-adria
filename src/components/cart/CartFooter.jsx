import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import Section from "../common/Section";
import LinkAnim from "../common/LinkAnim";

export default function CartFooter() {
	return (
		<Section>
			<LinkAnim>
				<Link to="/product" className="flex gap-2 items-center text-secondary">
					<FaArrowLeft />
					<p>Weiter einkaufen</p>
				</Link>
			</LinkAnim>
		</Section>
	)
}