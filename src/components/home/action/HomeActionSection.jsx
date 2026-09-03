import { FaClipboardList, FaCreditCard, FaGamepad, FaSearch } from "react-icons/fa";
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
			<div className="flex flex-col gap-4 px-4 py-8 md:mx-40">
				<div className="flex gap-2 text-primary font-secondary tracking-widest items-center text-2xs">
					<FaClipboardList />
					<h3 className="font-secondary tracking-widest uppercase">Einfach & Sicher</h3>
				</div>
				<h2 className="font-secondary tracking-widest font-bold text-text text-xl">In 3 Schritten zurück in die Vergangenheit</h2>
				<ul className="flex flex-col md:flex-row justify-between gap-4">
					{ actions.map(action => (
						<HomeAction key={ action.index } {...action} />
					))}
				</ul>
			</div>
		</Section>
	)
}