import { FaCheck, FaShieldAlt } from "react-icons/fa";

export default function CartSecurity() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-2 place-items-center">
				<div className="flex items-center text-primary border border-primary p-2 rounded-md">
					<FaCheck />
				</div>
				<div className="flex flex-col gap-1">
					<h3 className="text-base text-text font-bold">100% Originalgarantie</h3>
					<p className="text-2xs">Alle Module & Konsolen sind fachmännisch gereinigt.</p>
				</div>
			</div>
			<div className="flex gap-2 place-items-center">
				<div className="flex items-center text-primary border border-primary p-2 rounded-md">
					<FaShieldAlt />
				</div>
				<div className="flex flex-col gap-1">
					<h3 className="text-base text-text font-bold">Sicherer Checkout</h3>
					<p className="text-2xs">Deine Daten sind SSL-verschlüsselt.</p>
				</div>
			</div>
		</div>
	)
}