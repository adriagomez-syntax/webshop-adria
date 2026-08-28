export default function ImgHighlight({ src = "", alt = "", classNameParent = "", className = "" }) {
	return (
		<div className={ classNameParent + " overflow-hidden flex" }>
			<img src={ src } alt={ alt } className={ className + " flex-1 object-cover hover:opacity-90 hover:scale-105 transition duration-200"} />
		</div>
	)
}