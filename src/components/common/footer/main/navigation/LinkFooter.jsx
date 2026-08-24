import { Link } from "react-router";
import LinkAnim from "../../../LinkAnim";

export default function LinkFooter({ name, path, className = "" }) {
	return (
		<Link to={ path }>
			<LinkAnim className={ className }>
				<li className="text-xs">{ name }</li>
			</LinkAnim>
		</Link>
	)
}