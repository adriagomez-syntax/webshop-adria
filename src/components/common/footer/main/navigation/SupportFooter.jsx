import TitelHighlight from "../../../TitleHighlight";
import supportLink from "../../../../../assets/data/supportLinks.json" with { type: "json" }
import LinkFooter from "./LinkFooter";

export default function SupportFooter() {
	return (
		<div className="flex flex-col gap-2">
			<TitelHighlight className="text-xs" color="text-accent-2">Support</TitelHighlight>
			<ul className="flex flex-col gap-1">
				{supportLink.map(link => (
					<LinkFooter key={ link.id } { ...link } />
				))}
			</ul>
		</div>
	)
}