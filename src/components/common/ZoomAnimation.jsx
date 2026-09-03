export default function ZoomAnimation ({ className, children }) {
	return (
		<div className={`${className} hover:scale-105 transition duration-200`}>
			{ children }
		</div>
	)
}