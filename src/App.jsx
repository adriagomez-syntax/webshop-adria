import { Route, Routes } from "react-router"
import Header from "./components/common/header/Header"
import Footer from "./components/common/footer/Footer"
import HomePage from "./components/pages/HomePage"
import ShopPage from "./components/pages/ShopPage"
import Error404Page from "./components/pages/Error404Page"
import ProductDetailsPage from "./components/pages/ProductDetailsPage"
import CheckoutPage from "./components/pages/CheckouPage"
import AboutPage from "./components/pages/AboutPage"
import { useEffect, useState } from "react"
import CartContext from "./contexts/CartContext"
import CartPage from "./components/pages/CartPage"

export default function App() {
	
	const [cartItems, setCartItems] = useState(() => {
		let saved = localStorage.getItem("cartItems");
		if (!saved) { return [] }
		
		try {
			saved = JSON.parse(saved)
		}
		catch(e) { 
			console.error(e)
			saved = []
		}

		return saved
	})

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems))
	}, [cartItems])

	function addToCart(id, quantity) {
		const productFind = cartItems.find((item) => item.id === id)
		const productObj = productFind || { id: id, quantity: 0 }
		productObj.quantity += quantity

		if (productFind) { setCartItems([...cartItems]) }
		else { setCartItems([...cartItems, productObj]) }
	}
	
	function emptyCart() {
		setCartItems([])
	}

	return (
		<div className="bg-background font-primary font-light text-text/50 text-sm flex flex-col min-h-screen gap-4">
			<CartContext value={{ cartItems, addToCart, emptyCart, setCartItems }}>
				<Header />
				<Routes>
					<Route path="" element={ <HomePage /> } />
					<Route path="/product" element={ <ShopPage /> } />
					<Route path="/product/:id" element={ <ProductDetailsPage /> } />
					<Route path="/cart" element={ <CartPage /> } />
					<Route path="/checkout" element={ <CheckoutPage /> } />
					<Route path="/about" element={ <AboutPage /> } />

					<Route path="/*" element={ <Error404Page /> } />
				</Routes>
				<Footer />
			</CartContext>
		</div>
	)
}

