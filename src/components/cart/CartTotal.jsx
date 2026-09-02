import { useContext } from "react"
import CartContext from "../../contexts/CartContext"
import products from "../../assets/data/products.json" with { type: "json" }
import { Link } from "react-router"
import ButtonFilled from "../common/button/ButtonFilled"
import { FaArrowRight, FaCheck, FaShieldAlt } from "react-icons/fa"

export default function CartTotal() {
	
	const { cartItems } = useContext(CartContext)

	const totalSum = cartItems.reduce((sum, item) => sum + 
		(products.find((product) => product.id === item.id)?.price || 0) * item.quantity 
	, 0)

	const comission = totalSum * 0.19
	
	return (
		<div className="p-4 bg-background-mid border-background-card rounded-md">
			<div className="flex flex-col gap-3 text-xs border-b border-background-card">
				<h2 className="text-text font-bold text-sm">Zusammenfassung</h2>
				<div className="flex gap-3 justify-between items-center">
					<p>Zwischensumme</p>
					<p className="text-text">{ totalSum.toLocaleString("de-De") }€</p>
				</div>
				<div className="flex gap-3 justify-between">
					<p>Versandkosten</p>
					<p className="uppercase text-primary">Kostenlos</p>
				</div>
				<div className="flex gap-3 justify-between mb-4">
					<p>Inkl. 19% MwSt.</p>
					<p>{ comission.toLocaleString("de-De") }€</p>
				</div>
			</div>
			<div className="mt-4 flex flex-col gap-4">
				<div className="flex gap-3 justify-between items-center">
					<h2 className="text-base font-bold text-text">Gesamtsumme</h2>
					<p className="font-bold text-primary text-xl">{ totalSum.toLocaleString("de-De") }€</p>
				</div>
				<Link to="/checkout" className="min-w-full flex-1 flex">
					<ButtonFilled className="flex-1 flex gap-2 justify-center items-center uppercase font-bold">
						Zur Kasse Gehen
						<FaArrowRight />
					</ButtonFilled>
				</Link>
				<div className="flex gap-2">
					<div className="flex items-center text-primary border border-primary p-2 rounded-md">
						<FaCheck />
					</div>
					<div className="flex flex-col gap-1">
						<h3 className="text-base text-text font-bold">100% Originalgarantie</h3>
						<p className="text-2xs">Alle Module & Konsolen sind fachmännisch gereinigt.</p>
					</div>
				</div>
				<div className="flex gap-2">
					<div className="flex items-center text-primary border border-primary p-2 rounded-md">
						<FaShieldAlt />
					</div>
					<div className="flex flex-col gap-1">
						<h3 className="text-base text-text font-bold">Sicherer Checkout</h3>
						<p className="text-2xs">Deine Daten sind SSL-verschlüsselt.</p>
					</div>
				</div>
			</div>
		</div>
	)
}