import ButtonLittle from "../button/ButtonLittle";
import ButtonOutline from "../button/ButtonOutline";
import Input from "./Input";

export default function DetailsQuantity({ quantity, setQuantity, stock, min = 1, label = true, product = null, callback = null }) {
	
	function increment() {
		
		if (quantity < stock)
		{
			(callback !== null && product !== null) && callback(product, quantity + 1)
			setQuantity(quantity + 1);
		}
	}

	function decrement() {
		if (quantity > min)
		{
			(callback !== null && product !== null) && callback(product, quantity - 1)
			setQuantity(quantity - 1);
		}
	}

	function handleOnChange(event) {
		
		let value = Number(event.target.value)
		
		if (value > stock) { value = stock }
		if (value < min) { value = min }

		(callback !== null && product !== null) && callback(product, value)
		setQuantity(value)
	}
	
	return (
		<div className="flex gap-4 items-center">
			<div className="flex">
				<ButtonOutline onClick={decrement} size={ButtonLittle} color="border-secondary bg-accent-2/20 text-accent-2" rounded="rounded-l-md" disabled={ quantity <= min }>-</ButtonOutline>
				<div className="flex gap-1 items-center px-2 py-1 border-y border-secondary">
					{label && <span className="text-xs">Menge:</span>}
					<Input type="number" min={ min } max={ stock } value={ quantity } className="w-fit text-center" border=""
						onChange={event => handleOnChange(event)} />
				</div>
				<ButtonOutline onClick={increment} size={ButtonLittle} rounded="rounded-r-md" color="border-secondary bg-secondary/20 text-secondary" disabled={ quantity >= stock }>+</ButtonOutline>
			</div>
		</div>
	)
}