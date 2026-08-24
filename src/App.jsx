import { Route, Routes } from "react-router"
import Header from "./components/common/header/Header"
import Footer from "./components/common/footer/Footer"
import HomePage from "./components/pages/HomePage"
import ShopPage from "./components/pages/ShopPage"
import Error404Page from "./components/pages/Error404Page"

export default function App() {
	return (
		<div className="bg-background font-primary font-light text-text text-sm flex flex-col min-h-screen gap-4">
			<Header />
			<Routes>
				<Route path="" element={ <HomePage /> } />
				<Route path="/shop" element={ <ShopPage /> } />

				<Route path="/*" element={ <Error404Page /> } />
			</Routes>
			<Footer />
		</div>
	)
}

