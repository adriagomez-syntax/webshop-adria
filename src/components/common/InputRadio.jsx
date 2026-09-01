import Button from "./button/Button";

export default function InputRadio({ id, name, label, onChange, value, checked }) {
	return (
		<Button>
			<label className="flex gap-2 items-center group">
				<input id={ id } type="radio" name={ name } onChange={ onChange } value={ value } checked={ checked } className="peer hidden" />
				<div className="w-3 h-3 flex items-center justify-center rounded-full border border-background-card peer-checked:border-secondary transition ease-out duration-300">
					<div className="w-1 h-1 rounded-full bg-secondary opacity-0 group-has-[input:checked]:opacity-100 transition ease-out duration-300"></div>
				</div>
				<span className="text-xs peer-checked:text-text">{ label }</span>
			</label>
		</Button>
	)
}