import Logo from "./Logo";
import Navbar from "./navbar/Navbar";
import User from "./User";

export default function Header() {
	return (
		<header className="min-h-10 p-4 flex justify-between items-center border-b-1 border-text/20">
			<Logo />
			<Navbar />
			<User />
		</header>
	)
}