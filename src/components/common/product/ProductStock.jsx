export default function ProductStock({ stock }) {
	
	const texts = [
		{ min: 6, color: "text-primary", value: "[x] auf Lager" },
		{ min: 1, color: "text-accent-1", value: "Nur [x] auf Lager - bald vegriffen!" },
		{ min: -Infinity, color: "text-text", value: "Nicht verfügbar" },
	]

	const text = texts.find(text => stock >= text.min);
	
	return (
		<p className={text.color + " text-2xs tracking-widest"}>{ text.value.replace("[x]", stock) }</p>
	)
}