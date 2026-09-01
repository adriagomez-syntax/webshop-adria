import Section from "../common/Section"
import ProductList from "./product/ProductList"
import SidebarSection from "./sidebar/SidebarSection"

export default function ProductSection() {
	return (
		<Section className="flex flex-col md:flex-row justify-between gap-4">
			<SidebarSection />
			<ProductList />
		</Section>
	)
}