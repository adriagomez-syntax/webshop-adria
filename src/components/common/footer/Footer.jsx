import MediaFooter from "./MediaFooter";

export default function Footer() {
	return (
		<footer className="flex justify-between items-center px-4 border-t-1 border-text/20">
			<p className="text-xs">© 2026 PixelVault GmbH. Alle Rechte vorbehalten.</p>
			<MediaFooter />
		</footer>
	)
}