export default function SidebarLaptop({ children }) {
	return (
		<aside className="hidden md:flex md:flex-col md:gap-4 md:justify-between md:max-h-80 md:p-4 md:overflow-y-scroll md:border md:border-background-card md:rounded-md">
			{ children }
		</aside>
	)
}