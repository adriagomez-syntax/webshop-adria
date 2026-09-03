import ZoomAnimation from "../../common/ZoomAnimation"

export default function HomeBadge({ title, desc, icon }) {
	
	const Icon = icon
	
	return (
		<li>
			<ZoomAnimation className="flex gap-4">
				<div className="flex items-center text-primary border border-primary rounded-md p-4">
					<Icon />
				</div>
				<div className="flex flex-col gap-1 justify-center">
					<p className="text-text font-bold">{ title }</p>
					<p className="text-xs">{ desc }</p>
				</div>
			</ZoomAnimation>
		</li>
	)
}