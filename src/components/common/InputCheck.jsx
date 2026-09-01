export default function InputCheck({ id, name, label, onChange, value, checked }) {
	return (
		<label className="flex gap-1">
			<input id={ id } type="checkbox" name={ name } onChange={ onChange } value={ value } checked={ checked } className="peer" />
			<span className="peer-checked:text-text">{ label }</span>
		</label>
	)
}