import ButtonFilled from "../../common/button/ButtonFilled";
import ButtonLittle from "../../common/button/ButtonLittle";
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
				<ButtonFilled onClick={decrement} size={ButtonLittle} rounded="rounded-l-md" disabled={ quantity <= 1 }>-</ButtonFilled>
				<div className="flex gap-1 items-center px-2 py-1 border border-background-card">
					<span className="text-xs">Menge:</span>
					<Input type="number" min="1" max={ stock } value={ quantity } className="w-fit text-center" border=""
						onChange={event => handleOnChange(event)} />
				</div>
				<ButtonFilled onClick={increment} size={ButtonLittle} rounded="rounded-r-md" disabled={ quantity >= stock }>+</ButtonFilled>
			</div>
		</div>
	)
}