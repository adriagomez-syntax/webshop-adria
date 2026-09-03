import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

export default function CheckoutFooter() {
	return (
		<Link to="/cart" className="flex gap-2 items-center text-secondary hover:underline">
			<FaArrowLeft />
			<p>Zurück zum Warenkorb</p>
		</Link>
	)
}