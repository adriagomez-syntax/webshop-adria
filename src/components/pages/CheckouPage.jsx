import CheckoutFooter from "../checkout/CheckoutFooter";
import CheckoutHeroSection from "../checkout/CheckoutHeroSection";
import CheckoutFormSection from "../checkout/form/CheckoutFormSection";
import Main from "../common/Main"

export default function CheckoutPage() {
	return (
		<Main className="flex flex-col gap-6">
			<CheckoutHeroSection />
			<CheckoutFormSection />
			<CheckoutFooter />
		</Main>
	)
}