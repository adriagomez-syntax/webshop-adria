import { useContext } from "react"
import CartContext from "../../../contexts/CartContext"
import products from "../../../assets/data/products.json" with { type: "json" }
import CartResumePrice from "./CartResumePrice"
import CartCheckout from "./CartCheckout"
import CartSecurity from "./CartSecurity"

export default function CartTotal() {
	
	const { cartItems } = useContext(CartContext)

	const totalSum = cartItems.reduce((sum, item) => sum + 
		(products.find((product) => product.id === item.id)?.price || 0) * item.quantity 
	, 0)
	
	return (
		<div className="md:w-1/3 p-4 bg-background-mid border-background-card rounded-md">
			<CartResumePrice totalSum={totalSum} />
			<div className="flex flex-col gap-4">
				<CartCheckout totalSum={ totalSum } />
				<CartSecurity />
			</div>
		</div>
	)
}