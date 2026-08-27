import { Route, Routes } from "react-router"
import Header from "./components/common/header/Header"
import Footer from "./components/common/footer/Footer"
import HomePage from "./components/pages/HomePage"
import ShopPage from "./components/pages/ShopPage"
import Error404Page from "./components/pages/Error404Page"
import ProductDetailsPage from "./components/pages/ProductDetailsPage"
import CheckoutPage from "./components/pages/CheckouPage"
import AboutPage from "./components/pages/AboutPage"

export default function App() {
	return (
		<div className="bg-background font-primary font-light text-text text-sm flex flex-col min-h-screen gap-4">
			<Header />
			<Routes>
				<Route path="" element={ <HomePage /> } />
				<Route path="/product" element={ <ShopPage /> } />
				<Route path="/product/:id" element={ <ProductDetailsPage /> } />
				<Route path="/kasse" element={ <CheckoutPage /> } />
				<Route path="/about" element={ <AboutPage /> } />

				<Route path="/*" element={ <Error404Page /> } />
			</Routes>
			<Footer />
		</div>
	)
}

