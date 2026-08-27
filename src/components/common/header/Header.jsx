import Logo from "./Logo";
import Navbar from "./navbar/Navbar";
import User from "./user/User";

export default function Header() {
	return (
		<header className="min-h-10 p-4 border-b border-text/20">
			<div className="flex justify-between items-center md:mx-40">
				<Logo />
				<Navbar />
				<User />
			</div>
		</header>
	)
}