export default function Section({ className = "", children }) {
	return (
		<section className={ className + " flex flex-col gap-2 md:mx-40" }>
			{ children }
		</section>
	)
}