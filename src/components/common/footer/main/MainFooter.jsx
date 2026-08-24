import InfoFooter from "./info/InfoFooter";
import LegalFoter from "./navigation/LegalFooter";
import ShoppingFooter from "./navigation/ShoppingFooter"
import SupportFooter from "./navigation/SupportFooter"

export default function MainFooter() {
	return (
		<div className="flex flex-col md:flex-row gap-4 px-4 py-2">
			<InfoFooter />
			<ShoppingFooter />
			<SupportFooter />
			<LegalFoter />
		</div>
	)
}