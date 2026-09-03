import { FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

export default function CheckoutSecurity() {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-2 items-center">
				<div className="border border-primary rounded-md py-2 px-2 text-center justify-center text-primary">
					<FaArrowRotateLeft />					
				</div>
				<div className="flex flex-col gap-1">
					<p className="text-text font-bold">30 Tage Rückgaberecht</p>
					<p className="text-2xs md:text-xs">Sorgenfreies Shoppen mit Rückgabegarantie.</p>
				</div>
			</div>
			<div className="flex gap-2 items-center">
				<div className="border border-primary rounded-md py-2 px-2 text-center justify-center text-primary">
					<FaTruck />					
				</div>
				<div className="flex flex-col gap-1">
					<p className="text-text font-bold">DHL Paket inkl. Tracking</p>
					<p className="text-2xs md:text-xs">Verfolge deine Retro-Schätze lückenlos.</p>
				</div>
			</div>
		</div>
	)
}