import { useContext, useEffect } from "react";
import { ColorThemeContext } from "@/app/contexts/ColorThemeContext";
import { FaMagic } from "react-icons/fa";

export default function MagicCard() {
	const [colorTheme, setColorTheme] = useContext(ColorThemeContext);
	// color themes
	const colors = [
		"Mirage",
		"WildBlueYonder",
		"WaterLeaf",
		"LavenderPurple",
		"CoastalCalm",
		"RusticCanvas",
		"SereneOasis",
		"UrbanTwilight",
	];

	// switch to a color theme after a random time interval between 1 and 2 seconds
	useEffect(() => {
		const interval = setInterval(
			() => {
				handleMagicClick();
			},
			Math.floor(Math.random() * 1000) + 1000,
		);
		return () => clearInterval(interval);
	}, []);

	// function to handle the magic click
	function handleMagicClick() {
		let newColorTheme = colorTheme;
		while (newColorTheme === colorTheme) {
			newColorTheme = colors[Math.floor(Math.random() * colors.length)];
		}
		setColorTheme(newColorTheme);
		document.documentElement.setAttribute("data-theme", newColorTheme);
	}

	return (
		<div className={"h-full hover:transform-none"}>
			<button
				className={
					"flex flex-col items-center justify-center h-full w-full text-2xl font-semibold p-5"
				}
				type="button"
				onClick={handleMagicClick}
			>
				<FaMagic className="lg:text-[56px] text-[36px]" />
			</button>
		</div>
	);
}
