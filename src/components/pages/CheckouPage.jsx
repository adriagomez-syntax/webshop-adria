import CheckoutHeroSection from "../checkout/CheckoutHeroSection";
import CheckouFormtSection from "../checkout/form/CheckoutFormSection";
import Main from "../common/Main"

export default function CheckoutPage() {
	return (
		<Main className="flex flex-col gap-6">
			<CheckoutHeroSection />
			<CheckouFormtSection />
		</Main>
	)
}