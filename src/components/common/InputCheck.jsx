export default function InputCheck({ id, name, label, onChange, value, checked }) {
	return (
		<label className="flex gap-2 items-center transition duration-300 group">
			<input id={ id } type="checkbox" name={ name } onChange={ onChange } value={ value } checked={ checked } className="peer hidden" />
			<div className="w-4 h-4 border-2 border-background-card peer-checked:bg-accent-2 peer-checked:border-0 rounded-md flex items-center justify-center">
				<svg
					className="w-3 h-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
					fill="none"
					stroke="currentColor"
					strokeWidth="3"
					viewBox="0 0 24 24"
				>
					<path d="M5 13l4 4L19 7" />
				</svg>
			</div>
			<span className="peer-checked:text-text">{ label }</span>
		</label>
	)
}