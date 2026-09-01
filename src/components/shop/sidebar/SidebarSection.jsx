import SidebarLaptop from "./SidebarLaptop"
import SidebarFilter from "./SidebarFilter"

export default function SidebarSection() {
	return (
		<SidebarLaptop>
			<SidebarFilter mobile={ false } />
		</SidebarLaptop>
	)
}