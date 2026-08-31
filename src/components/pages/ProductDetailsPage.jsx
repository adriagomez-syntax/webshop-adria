import Main from "../common/Main";
import { useParams } from "react-router";
import Error404Page from "./Error404Page"
import products from "../../assets/data/products.json" with { type: "json" }
import DetailsHero from "../details/hero/DetailsHero";
import DetailsDescription from "../details/DetailsDescription";

export default function ProductDetailsPage({ addToCart }) {

	const { id } = useParams();
	const product = products.find(product => product.id === id);
	if (typeof product === "undefined")
	{
		return <Error404Page returnPath={ "/product" } />;
	}
	
	return (
		<Main className="flex flex-col gap-12">
			<DetailsHero addToCart={ addToCart } {...product} />
			<DetailsDescription {...product} />
		</Main>
	)
}