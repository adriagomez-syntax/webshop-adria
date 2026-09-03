import { FaCheck } from "react-icons/fa";
import Section from "../common/Section";
import TitelHighlight from "../common/TitleHighlight";
import ImgHighlight from "../common/ImgHighlight";
import ButtonFilled from "../common/button/ButtonFilled";
import { Link } from "react-router";

export default function HomeHeroSection() {
	return (
		<Section className="mb-8 md:max-h-[40vh] gap-4 md:flex-row">
			<div className="flex flex-col gap-4 md:w-1/2">
				<div className="flex gap-2 text-primary font-secondary tracking-widest items-center text-2xs">
					<FaCheck />
					<h3 className="uppercase">100% Originale & Geprüft</h3>
				</div>
				<TitelHighlight>
					{"Deine Zeitmaschine für "}
					<span className="text-secondary">Gaming-Klassiker</span>
				</TitelHighlight>
				<p>
					Erlebe die goldene Ära des Gamings neu. PixelVault ist deine Anlaufstelle für authentische Retro-Konsolen, seltene OVP-Cartridges und kultiges Zubehör. Jedes Sammlerstück von uns wird intensiv auf Herz und Nieren geprüft.
				</p>
				<div className="flex">
					<Link to="/product" className="flex-1">
						<ButtonFilled className="w-full md:w-fit">Jetzt stöbern</ButtonFilled>
					</Link>
				</div>
			</div>
			<ImgHighlight src="/images/hero-image.jpg" classNameParent="rounded-md border border-secondary md:w-1/2" alt="Hero Image" />
		</Section>
	)
}