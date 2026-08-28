import BottomFooter from "./bottom/BottomFooter";
import MainFooter from "./main/MainFooter";

export default function Footer() {
	return (
		<footer className="flex flex-col mt-4 border-t border-background-card">
			<MainFooter />
			<BottomFooter />
		</footer>
	)
}