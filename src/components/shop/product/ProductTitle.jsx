import { Link } from "react-router";

export default function ProductTitle({ id, name }) {
	return (
		<Link to={ "/product/" + id } className="w-fit">
			<p className="text-lg font-bold hover:underline hover:opacity-75">{ name }</p>
		</Link>
	)
}