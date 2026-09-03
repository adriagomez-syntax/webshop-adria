import { FaCreditCard, FaGamepad, FaSearch } from "react-icons/fa";
import Section from "../../common/Section";
import HomeAction from "./HomeAction";

export default function HomeActionSection() {
	
	const actions = [
		{ index: 1, icon: FaSearch, title: "Stöbern", desc: "Erforsche unser kuratiertes Sortiment an Klassikern. Filtere ganz einfach nach Konsole und Preis." },
		{ index: 2, icon: FaCreditCard, title: "Bestellen", desc: "Profitiere von sicheren Zahlungsmethoden und zertifizierter Abwicklung. Wir verpacken alles bombensicher." },
		{ index: 3, icon: FaGamepad, title: "Spielen", desc: "Verbinde dein Spielgerät, atme den Duft nostalgischer Handbücher ein und drücke endlich wieder START!" }
	]
	
	return (
		<Section hasMargin={ false } className="border-y border-background-card bg-background-dark my-8">
			<ul className="flex flex-col md:flex-row justify-between gap-4 px-4 py-8 md:mx-40">
				{ actions.map(action => (
					<HomeAction key={ action.index } {...action} />
				))}
			</ul>
		</Section>
	)
}