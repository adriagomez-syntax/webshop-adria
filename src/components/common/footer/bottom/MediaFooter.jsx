import { media } from "../../../../assets/data/mediaLinks"
import MediaFooterLink from "./MediaFooterLink"

export default function MediaFooter() {
	return (
		<ul className="flex gap-1">
			{media.map(link => (
				<MediaFooterLink key={ link.id } {...link} />
			))}
		</ul>
	)
}