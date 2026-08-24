import MediaFooter from "./MediaFooter";

export default function BottomFooter() {
	return (
		<div className="border-t border-text/20">
			<div className="flex flex-col md:flex-row px-4 py-4 justify-between items-center  md:mx-40">
				<p className="text-xs">© 2026 PixelVault GmbH. Alle Rechte vorbehalten.</p>
				<MediaFooter />
			</div>
		</div>
	)
}