import ButtonFilled from "../common/ButtonFilled";
import ButtonLittle from "../common/ButtonLittle";
import Input from "../common/Input";

export default function DetailsQuantity({ quantity, setQuantity, stock }) {
	
	function increment() {
		
		if (quantity < stock)
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
		<div className="flex gap-4 items-center">
			<p>Menge:</p>
			<div className="flex gap-2">
				<ButtonFilled onClick={decrement} size={ButtonLittle}>-</ButtonFilled>
				<Input type="number" min="1" max={ stock } value={ quantity } className="w-fit text-center"
					onChange={event => setQuantity(event.target.value)} />
				<ButtonFilled onClick={increment} size={ButtonLittle}>+</ButtonFilled>
			</div>
		</div>
	)
}