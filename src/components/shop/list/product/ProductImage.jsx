import { Link } from "react-router";
import ImgHighlight from "../../../common/ImgHighlight";

export default function ProductImage({ id, name, stock, img }) {
	return (
		<Link to={ "/product/" + id }>
			{stock <= 0 &&
				<div className="absolute mt-2 ml-2 z-10">
					<span className="text-2xs font-secondary uppercase tracking-widest text-text border border-text bg-background-mid rounded-md px-2 py-1">Ausverkauft</span>
				</div>
			}
			<ImgHighlight src={ img } alt={ name } />
		</Link>
	)
}