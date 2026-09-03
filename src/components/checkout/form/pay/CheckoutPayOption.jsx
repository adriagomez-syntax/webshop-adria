import Button from "../../../common/button/Button";
import InputRadio from "../../../common/input/InputRadio";

export default function CheckoutPayOption({ optionSel, handleChange, id, name, icon}) {
	
	const Icon = icon
	
	return(
		<Button className="group">
			<label className="min-h-full flex gap-2 justify-between items-center p-4 border border-background-card group-has-checked:border-secondary rounded-md">
				<div className="flex gap-2 items-center">
					<InputRadio name="pay" checked={ optionSel?.id === id } onChange={ handleChange } value={ id } hasLabel={ false } />
					<p className="text-text font-bold text-left">{ name }</p>
				</div>
				<p className="text-text font-bold">
					<Icon />
				</p>
			</label>
		</Button>
	)
}