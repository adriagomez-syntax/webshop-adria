import ButtonLittle from "../../common/button/ButtonLittle";
import ButtonOutline from "../../common/button/ButtonOutline";
import Input from "../../common/Input";

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

	function handleOnChange(event) {
		
		let value = Number(event.target.value)
		
		if (value > stock) { value = stock }
		if (value <= 0) { value = 1 }

		setQuantity(value)
	}
	
	return (
		<div className="flex gap-4 items-center">
			<div className="flex">
				<ButtonOutline onClick={decrement} size={ButtonLittle} color="border-secondary bg-accent-2/20 text-accent-2" rounded="rounded-l-md" disabled={ quantity <= 1 }>-</ButtonOutline>
				<div className="flex gap-1 items-center px-2 py-1 border-y border-secondary">
					<span className="text-xs">Menge:</span>
					<Input type="number" min="1" max={ stock } value={ quantity } className="w-fit text-center" border=""
						onChange={event => handleOnChange(event)} />
				</div>
				<ButtonOutline onClick={increment} size={ButtonLittle} rounded="rounded-r-md" color="border-secondary bg-secondary/20 text-secondary" disabled={ quantity >= stock }>+</ButtonOutline>
			</div>
		</div>
	)
}