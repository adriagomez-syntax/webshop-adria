import shoppingLinks from "../../../../../assets/data/shoppingLinks.json" with { type: "json" }
import TitelHighlight from "../../../TitleHighlight"
import LinkFooter from "./LinkFooter"

export default function ShoppingFooter() {
	return (
		<div className="flex flex-col gap-2">
			<TitelHighlight className="text-xs">Shopping</TitelHighlight>
			<ul className="flex flex-col gap-1">
				{shoppingLinks.map(link => (
					<LinkFooter key={ link.id } {...link} />
				))}
			</ul>
		</div>
	)
}