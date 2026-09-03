import Section from "../../common/Section";
import ScrollList from "../../common/ScrollList"
import communityComments from "../../../assets/data/communityComments.json" with { type: "json" }
import HomeCommunity from "./HomeCommunity";
import { FaUsers } from "react-icons/fa";

export default function HomeCommunitySection() {
	return (
		<Section>
			<div className="flex gap-2 text-secondary font-secondary tracking-widest items-center text-2xs">
				<FaUsers />
				<h3 className="font-secondary tracking-widest uppercase">Stimmen der Retro-Community</h3>
			</div>
			<h2 className="font-secondary tracking-widest font-bold text-text text-xl">Was die Community sagt</h2>
			<ScrollList list={ communityComments } itemComponent={ HomeCommunity } width="w-[60vw] md:w-[25vw]" />
		</Section>
	)
}