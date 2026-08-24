import TitelHighlight from "../../../TitleHighlight";
import LinkFooter from "./LinkFooter";
import legalLinks from "../../../../../assets/data/legalLinks.json" with { type: "json" }

export default function LegalFoter() {
	return (
		<div className="flex flex-col gap-2">
			<TitelHighlight className="text-xs" color="text-accent-3">Rechtliches</TitelHighlight>
			<ul className="flex flex-col gap-1">
				{legalLinks.map(link => (
					<LinkFooter key={ link.id } {...link} />
				))}
			</ul>
		</div>
	)
}