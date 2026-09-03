import ZoomAnimation from "./ZoomAnimation";

export default function ImgHighlight({ src = "", alt = "", classNameParent = "", className = "" }) {
	return (
		<div className={ classNameParent + " overflow-hidden flex" }>
			<ZoomAnimation>
				<img src={ src } alt={ alt } className={ className + " flex-1 object-cover hover:opacity-90"} />
			</ZoomAnimation>
		</div>
	)
}