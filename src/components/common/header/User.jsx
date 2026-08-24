import Button from "../Button"
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"

export default function User() {
	return (
		<div className="flex gap-2 text-center items-center">
			<Button>
				<FaSearch />
			</Button>
			<Button>
				<FaUser />
			</Button>
			<Button>
				<FaShoppingCart />
			</Button>
		</div>
	)
}