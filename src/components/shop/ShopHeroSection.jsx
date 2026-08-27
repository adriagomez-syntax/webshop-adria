import Section from "../common/Section";
import TitleHighlight from "../common/TitleHighlight"
import FullPath from "../common/FullPath";

export default function ShopHeroSection({ resultNum }) {
	return (
		<Section>
			<FullPath />
			<div className="flex flex-col md:flex-row gap-4 justify-between md:items-end">
				<TitleHighlight>Spiele durchsuchen!</TitleHighlight>
				<p className="flex gap-1 text-primary text-xs">
					<span className={resultNum > 0 ? "font-secondary" : ""}>
						{ resultNum || "Keine "}
					</span>
					{ " Ergebnisse" }
				</p>
			</div>
		</Section>
	)
}