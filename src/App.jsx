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

export default function App() {
	
	const [cartItems, setCartItems] = useState(() => {
		const saved = localStorage.getItem("cartItems");
		return saved ? JSON.parse(saved) : []
	})
	const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems))
	}, [cartItems])

	function addToCart(id, quantity) {
		const productFind = cartItems.find((item) => item.id === id)
		const productObj = productFind || { id: id, quantity: 0 }
		productObj.quantity += quantity

		if (productFind) { setCartItems([...cartItems]) }
		else { setCartItems([...cartItems, productObj]) }
		console.log(cartItems);
	}
	
	return (
		<div className="bg-background font-primary font-light text-text/50 text-sm flex flex-col min-h-screen gap-4">
			<Header quantity={ cartCount } />
			<Routes>
				<Route path="" element={ <HomePage /> } />
				<Route path="/product" element={ <ShopPage addToCart={ addToCart } /> } />
				<Route path="/product/:id" element={ <ProductDetailsPage addToCart={ addToCart } /> } />
				<Route path="/kasse" element={ <CheckoutPage /> } />
				<Route path="/about" element={ <AboutPage /> } />

				<Route path="/*" element={ <Error404Page /> } />
			</Routes>
			<Footer />
		</div>
	)
}

