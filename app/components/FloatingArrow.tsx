import { IoIosArrowDown } from "react-icons/io";

export default function FloatingArrow() {
	return (
		<div className="absolute mt-4 bottom-0 left-1/2 animate-phantom invisible lg:visible">
			<IoIosArrowDown
				className="relative -left-1/2 text-Color-400 m-0 -z-10 -mb-7"
				size={42}
			/>
			<IoIosArrowDown
				className="relative -left-1/2 text-Color-300 m-0 -z-10 delay-200"
				size={42}
			/>
		</div>
	);
}
