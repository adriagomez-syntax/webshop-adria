import { FaUser } from "react-icons/fa";
import UserCart from "../../components/common/header/user/UserCart";

export const userButtons = [
	{
		id: "profile",
		icon: FaUser,
		path: "#"
	},
	{
		id: "cart",
		icon: UserCart,
		path: "/kasse"
	},
]