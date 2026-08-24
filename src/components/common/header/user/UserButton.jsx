import Button from "../../Button";

export default function UserButton({ func, icon}) {
	const Icon = icon;

	return (
		<Button onClick={ func } className="hover:text-accent-3">
			<Icon />
		</Button>
	)
}