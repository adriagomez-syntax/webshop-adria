import Section from "../common/Section";

export default function DetailsDescription({ description }) {
	return (
		<Section>
			<h3 className="uppercase font-secondary font-bold text-secondary">Beschreibung</h3>
			<p>{ description || 'Keine Beschreibung verfügbar.' }</p>
		</Section>
	)
}