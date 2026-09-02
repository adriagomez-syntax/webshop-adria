import { useContext } from "react";
import FullPath from "../common/FullPath";
import Section from "../common/Section";
import TitelHighlight from "../common/TitleHighlight";
import CartContext from "../../contexts/CartContext";

export default function CartHeroSection() {
	
	const { cartItems } = useContext(CartContext)
	const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

	return(
		<Section>
			<FullPath />
			<div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-end">
				<TitelHighlight>Dein Warenkorb</TitelHighlight>
				<p className="flex gap-2 items-center text-primary text-xs">
					<span className="font-secondary">{ cartCount }</span>
					{" Artikel gesichert"}
				</p>
			</div>
		</Section>
	)
}