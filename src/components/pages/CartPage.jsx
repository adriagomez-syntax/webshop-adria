import { useContext } from "react";
import CartFooter from "../cart/CartFooter";
import CartHeroSection from "../cart/CartHeroSection";
import CartListSection from "../cart/CartListSection";
import CartTotal from "../cart/total/CartTotal";
import Main from "../common/Main";
import Section from "../common/Section";
import CartContext from "../../contexts/CartContext";

export default function CartPage() {
	
	const { cartItems } = useContext(CartContext)
	
	return (
		<Main className="flex flex-col gap-6">
			<CartHeroSection />
			<Section className={`${cartItems.length > 0 ? "md:justify-between md:items-start" : "justify-center items-center"} flex flex-col gap-4 md:flex-row md:gap-6`}>
				{ cartItems.length > 0
					? <>
						<CartListSection />
						<CartTotal />
					</> 
					: <div className="min-h-full flex justify-center items-center">
						<h2>Warenkorb ist noch leer! :(</h2>
					</div>
				}
			</Section>
			<CartFooter />
		</Main>
	)
}