import CartFooter from "../cart/CartFooter";
import CartHeroSection from "../cart/CartHeroSection";
import CartListSection from "../cart/CartListSection";
import CartTotal from "../cart/CartTotal";
import Main from "../common/Main";
import Section from "../common/Section";

export default function CartPage() {
	return (
		<Main className="flex flex-col gap-6">
			<CartHeroSection />
			<Section className="flex flex-col gap-4 md:items-start md:flex-row md:gap-6 md:justify-between">
				<CartListSection />
				<CartTotal />
			</Section>
			<CartFooter />
		</Main>
	)
}