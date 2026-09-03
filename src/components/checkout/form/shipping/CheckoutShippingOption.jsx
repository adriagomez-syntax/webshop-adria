import InputRadio from "../../../common/input/InputRadio";
import Button from "../../../common/button/Button";

export default function CheckoutShippingOption({ id, name, desc, price, optionSel, handleChange}) {
	return(
		<Button className="flex-1 group">
			<label className="min-h-full flex gap-2 justify-between items-center p-4 border border-background-card group-has-checked:border-secondary rounded-md">
				<div className="flex gap-2 items-center">
					<InputRadio name="shipping" checked={ optionSel?.id === id } onChange={ handleChange } value={ id } hasLabel={ false } />
					<div className="flex flex-col gap-1 text-left">
						<p className="text-text font-bold">{ name }</p>
						<p className="text-2xs">{ desc }</p>
					</div>
				</div>
				<p className={`${price === 0 ? "text-primary" : "text-text"} font-bold uppercase`}>
					{ price === 0 
						? "Kostenlos"
						: price.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
					}
				</p>
			</label>
		</Button>
	)
}