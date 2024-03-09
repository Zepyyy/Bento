import { useContext } from "react";
import { ColorThemeContext } from "@/app/contexts/ColorThemeContext";
import { FaMagic } from "react-icons/fa";

export default function MagicCard() {
	const [colorTheme, setColorTheme] = useContext(ColorThemeContext);

	function handleMagicClick() {
		const colors = ["Mirage"];
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		setColorTheme(randomColor);
	}

	return (
		<div className={"h-full hover:transform-none"}>
			<button
				className={`flex flex-col items-center justify-center h-full w-full text-2xl font-semibold ${colorTheme}`}
				type="button"
				onClick={handleMagicClick}
			>
				<FaMagic size={56} />
			</button>
		</div>
	);
}
