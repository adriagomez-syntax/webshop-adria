import { Link } from "react-router";
import Button from "./Button";

export default function CategoryLabel({ disabled = false, children }) {
	return (
		<Link to={ "#" }>
			<Button className={(!disabled && "text-secondary border-secondary") + " text-2xs font-secondary uppercase tracking-widest border rounded-md px-2 py-1"}>
				{ children }
			</Button>
		</Link>
	)
}