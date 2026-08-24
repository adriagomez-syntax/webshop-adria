import TitelHighlight from "../../../TitleHighlight";

export default function InfoFooter() {
	return (
		<div className="flex flex-col gap-2">
			<TitelHighlight className="text-lg text-text">{"Pixel"}
				<span className="text-secondary">Vault</span>
			</TitelHighlight>
			<p className="text-wrap">PixelVault GmbH — Deine Zeitmaschine von die 80er bis heute. Wir teilen deine Leidenschaft für klassische Videospiele und bieten ein lückenlos geprüftes Sammler-Erlebnis.</p>
		</div>
	)
}