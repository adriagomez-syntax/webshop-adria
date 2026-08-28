import ImgHighlight from "../../common/ImgHighlight";

export default function DetailsImage({ name, img }) {
	return (
		<ImgHighlight src={ img } alt={ name } classNameParent="rounded-md border border-secondary" />
	)
}