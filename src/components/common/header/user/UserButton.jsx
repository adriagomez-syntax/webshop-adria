import { Link } from "react-router";
import Button from "../../button/Button";

export default function UserButton({ path, icon, quantity }) {
	const Icon = icon;
	return (
		<Link to={ path }>
			<Button className="hover:text-accent-3 text-text">
				<Icon quantity={ quantity } />
			</Button>
		</Link>
	)
}