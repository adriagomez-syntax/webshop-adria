import { userButtons } from "../../../../assets/data/userButtons"
import UserButton from "./UserButton"
export default function User() {

	return (
		<div>
			<ul className="flex gap-2 text-center items-center">
				{userButtons.map(button => (
					<UserButton key={ button.id } { ...button } />
				))}
			</ul>
		</div>
	)
}