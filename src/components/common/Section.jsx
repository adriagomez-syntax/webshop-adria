export default function Section({ hasMargin = true, className = "", children }) {
	return (
		<section className={`${className} ${hasMargin && "px-4 md:mx-40"} flex flex-col gap-2`}>
			{ children }
		</section>
	)
}