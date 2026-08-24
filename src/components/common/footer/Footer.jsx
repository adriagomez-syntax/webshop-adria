import BottomFooter from "./bottom/BottomFooter";
import MainFooter from "./main/mainFooter";

export default function Footer() {
	return (
		<footer className="flex flex-col mt-4 border-t border-text/20">
			<MainFooter />
			<BottomFooter />
		</footer>
	)
}