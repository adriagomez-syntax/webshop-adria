import Main from "../common/Main";
import { useParams } from "react-router";
import Error404Page from "./Error404Page"
import products from "../../assets/data/products.json" with { type: "json" }
import { useState } from "react";
import DetailsHero from "../details/DetailsHero";
import DetailsQuantity from "../details/DetailsQuantity";
import DetailsButtons from "../details/DetailsButtons";

export default function ProductDetailsPage() {
	
	const [ quantity, setQuantity ] = useState(1);

	const { id } = useParams();
	const product = products.find(product => product.id === id);
	if (typeof product === "undefined")
	{
		return <Error404Page />;
	}

	function addToCart() {
		console.log(`${quantity}x ${product.name} zum Warenkorb hinzugefügt`);
	}
	
	return (
		<Main className="flex flex-col gap-6">
			<DetailsHero {...product} />
			<DetailsQuantity {...product} quantity={ quantity } setQuantity={ setQuantity } />
			<DetailsButtons addToCart={ addToCart } />
		</Main>
	)
}