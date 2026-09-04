import { Link } from "react-router";
import LinkAnim from "../LinkAnim";

export default function ProductTitle({ id, name }) {
	return (
		<Link to={ "/product/" + id } className="w-fit">
			<LinkAnim className="text-lg font-bold text-text">{ name }</LinkAnim>
		</Link>
	)
}