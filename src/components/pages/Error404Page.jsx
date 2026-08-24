import { useLocation } from "react-router";
import Main from "../common/Main";
import TitelHighlight from "../common/TitleHighlight";

export default function Error404Page() {
	
	const location = useLocation();
	
	return (
		<Main className="flex flex-col gap-4 items-center justify-center">
			<TitelHighlight>Error 404</TitelHighlight>
			<p>{"Page "}
				<span className="text-accent-2">{ location.pathname }</span>
				{" nicht erreichbar!"}
			</p>
		</Main>
	)
}