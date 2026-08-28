export default function Main({ className = "", children }) {
	return (
		<main className={className + " flex-1 p-4 mt-20" }>
			{ children }
		</main>
	)
}