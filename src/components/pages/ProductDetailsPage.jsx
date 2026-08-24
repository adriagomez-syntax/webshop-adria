import Main from "../common/Main";
import ImgHighlight from "../common/ImgHighlight"
import { Link, useParams } from "react-router";
import Error404Page from "./Error404Page"
import TitelHighlight from "../common/TitleHighlight";
import ButtonOutline from "../common/ButtonOutline"
import ButtonFilled from "../common/ButtonFilled"
import products from "../../assets/data/products.json" with { type: "json" }
import categoryName from "../../assets/data/categoryName.json" with { type: "json" }
import { FaArrowLeft, FaCartPlus, FaStar } from "react-icons/fa";
import Input from "../common/Input";
import { useState } from "react";

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

	function increment() {
		
		if (quantity < product.stock)
		{
			setQuantity(quantity + 1);
		}
	}

	function decrement() {
		if (quantity > 1)
		{
			setQuantity(quantity - 1);
		}
	}
	
	return (
		<Main className="flex flex-col gap-6">
			<ImgHighlight src={ product.img } alt={ product.name } />
			<TitelHighlight>{ product.name }</TitelHighlight>
			<h2 className="font-secondary font-bold tracking-widest text-xl text-accent-1">{ product.price } €</h2>
			<p>{ product.description }</p>
			<div>
				<ButtonOutline className="font-secondary" color="text-secondary">{ categoryName[product.category] }</ButtonOutline>
			</div>
			<div className="flex gap-4">
				<p>Bewertung: </p>
				<p className="flex gap-1 items-center font-secondary text-accent-1">
					{ product.rating }
					<FaStar />
				</p>
			</div>
			<div className="flex gap-4 items-center">
				<p>Menge:</p>
				<div className="flex gap-2">
					<ButtonFilled onClick={decrement}>-</ButtonFilled>
					<Input type="number" min="1" max={ product.stock } value={ quantity }  className="w-fit"
						onChange={event => setQuantity(event.target.value)} />
					<ButtonFilled onClick={increment}>+</ButtonFilled>
				</div>
			</div>
			<div className="flex gap-4">
				<Link to="/shop" className="flex">
					<ButtonOutline className="flex gap-2 items-center">
						<FaArrowLeft />
						{"Zurück"}
					</ButtonOutline>
				</Link>
				<ButtonFilled onClick={addToCart} className="flex gap-2 items-center">
					<FaCartPlus />
					{"In den Warenkorb"}
				</ButtonFilled>
			</div>
		</Main>
	)
}