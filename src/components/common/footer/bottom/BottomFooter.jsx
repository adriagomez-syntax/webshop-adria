import MediaFooter from "./MediaFooter";

export default function BottomFooter() {
	return (
		<div className="flex px-4 py-2 justify-between items-center border-t border-text/20">
			<p className="text-xs">© 2026 PixelVault GmbH. Alle Rechte vorbehalten.</p>
			<MediaFooter />
		</div>
	)
}