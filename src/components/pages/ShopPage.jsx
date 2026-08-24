import Main from "../common/Main";
import ProductSection from "../shop/ProductSection";
import TitleHighlight from "../common/TitleHighlight"

export default function ShopPage() {
	return (
		<Main className="flex flex-col gap-4">
			<TitleHighlight>Spiele durchsuchen!</TitleHighlight>
			<ProductSection />
		</Main>
	)
}