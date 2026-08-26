import { Link } from "react-router";
import Button from "./Button";

export default function CategoryLabel({ children }) {
	return (
		<Link to={ "#" }>
			<Button className="text-2xs font-secondary tracking-widest text-secondary border border-secondary rounded-md px-2 py-1">
				{ children }
			</Button>
		</Link>
	)
}