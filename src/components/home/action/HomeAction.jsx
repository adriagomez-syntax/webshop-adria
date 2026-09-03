import ZoomAnimation from "../../common/ZoomAnimation";

export default function HomeSecurity({ index, icon, title, desc }) {
	
	const Icon = icon
	
	return (
		<ZoomAnimation className="flex flex-col gap-2 p-4 border border-background-card bg-background-mid rounded-md">
			<div className="flex gap-2 justify-between items-center">
				<div className="text-secondary border border-secondary bg-secondary/10 rounded-full p-2">
					<Icon />
				</div>
				<p className="font-secondary font-bold text-secondary/10 text-2xl">{ String(index).padStart(2, '0') }</p>
			</div>
			<p className="font-secondary font-bold text-text text-lg">{ title }</p>
			<p className="text-xs">{ desc }</p>
		</ZoomAnimation>
	)
}