export default function Main({ className = "", children }) {
	return (
		<main className={className + " py-4 flex-1 mt-20" }>
			{ children }
		</main>
	)
}