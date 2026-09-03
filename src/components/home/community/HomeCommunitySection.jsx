import Section from "../../common/Section";
import ScrollList from "../../common/ScrollList"
import communityComments from "../../../assets/data/communityComments.json" with { type: "json" }
import HomeCommunity from "./HomeCommunity";

export default function HomeCommunitySection() {
	return (
		<Section>
			<ScrollList list={ communityComments } itemComponent={ HomeCommunity } width="w-[60vw] md:w-[25vw]" />
		</Section>
	)
}