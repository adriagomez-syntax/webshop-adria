import { Link, useLocation } from "react-router";
import Main from "../common/Main";
import TitelHighlight from "../common/TitleHighlight";
import ButtonFilled from "../common/ButtonFilled";
import { FaArrowLeft } from "react-icons/fa";

export default function Error404Page({ returnPath = null }) {
	
	const location = useLocation();
	
	return (
		<Main className="flex flex-col gap-4 items-center justify-center min-h-[50vh]">
			<TitelHighlight>Error 404</TitelHighlight>
			<p>{"Page "}
				<span className="text-accent-2">{ location.pathname }</span>
				{" nicht erreichbar!"}
			</p>
			{returnPath &&
				<Link to={ returnPath } >
					<ButtonFilled className="flex gap-2 items-center">
						<FaArrowLeft />
						Zurück
					</ButtonFilled>
				</Link>
			}
		</Main>
	)
}