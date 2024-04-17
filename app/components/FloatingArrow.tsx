import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";

export default function FloatingArrow({ section }: { section: string }) {
	return (
		<div
			className={clsx(
				"absolute invisible lg:visible z-10 left-1/2 bottom-0 cursor-auto select-none",
				section === "home" ? "animate-phantom" : "hidden",
			)}
		>
			<IoIosArrowDown
				className="relative -left-1/2 text-Color-400 -mb-7"
				size={42}
			/>
			<IoIosArrowDown className="relative -left-1/2 text-Color-300" size={42} />
		</div>
	);
}
