export default function Card({ className = "", children }) {
	return (
		<div className={`${className} flex flex-col gap-2 overflow-hidden bg-background-card border border-accent-3/20 rounded-md 
			hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] 
			hover:shadow-secondary/20 hover:-translate-y-2 hover:transform transition ease-out`}>
			{ children }
		</div>
	)
}