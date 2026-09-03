export default function CheckoutCard({ index, label, children }) {
	return (
		<div className="flex flex-col gap-4 p-4 border-background-card bg-background-mid rounded-md">
			<div className="flex gap-2 items-center">
				{ index &&
					<p className="font-secondary font-bold py-2 px-4 bg-secondary rounded-md text-background">{ index }</p>
				}
				<p className="uppercase font-bold text-text text-lg">{ label }</p>
			</div>
			{ children }
		</div>
	)
}