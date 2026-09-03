import Main from "../common/Main";
import HomeBadgeSection from "../home/badge/HomeBadgeSection";
import HomeBestsellerSection from "../home/HomeBestsellerSection";
import HomeHeroSection from "../home/HomeHeroSection";
import HomeActionSection from "../home/action/HomeActionSection";
import HomeCommunitySection from "../home/community/HomeCommunitySection";
import HomeNotification from "../home/HomeNotification";

export default function HomePage() {
	return (
		<Main>
			<HomeHeroSection />
			<HomeBadgeSection />
			<HomeBestsellerSection />
			<HomeActionSection />
			<HomeCommunitySection />
			<HomeNotification />
		</Main>
	)
}