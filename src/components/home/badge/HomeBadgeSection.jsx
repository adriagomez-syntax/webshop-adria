import { FaShieldAlt, FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import Section from "../../common/Section";
import HomeBadge from "./HomeBadge";

export default function HomeBadgeSection() {
	
	const badges = [
		{ title: "Sichere Zahlung", desc: "Verschlüsselt via SSL & PayPal", icon: FaShieldAlt },
		{ title: "Schneller Versand", desc: "DHL Paket inklusive Tracking", icon: FaTruck },
		{ title: "30 Tage Rückgabe", desc: "Unkomplizierter Käuferschutz", icon: FaArrowRotateLeft }
	]
	
	return (
		<Section hasMargin={ false } className="border-y border-background-card bg-background-dark px-4 py-8" >
			<ul className="flex flex-col md:flex-row justify-between gap-4 md:mx-40">
				{ badges.map(badge => (
					<HomeBadge key={ badge.title } {...badge} />
				))}
			</ul>
		</Section>
	)
}