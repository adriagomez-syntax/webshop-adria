import Button from "../Button";

export default function MediaFooterLink({ name, icon, link }) {
	
	const Icon = icon;
	
	return (
		<Button className="size-10">
			<a href={ link } target="_blank" alt={ name }>
				<Icon />	
			</a>
		</Button>
	)
}