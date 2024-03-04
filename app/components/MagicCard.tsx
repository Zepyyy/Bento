import {useContext} from "react";
import {ColorThemeContext} from "@/app/contexts/ColorThemeContext";
import {FaMagic} from "react-icons/fa";

export default function MagicCard() {
    const [colorTheme, setColorTheme] = useContext(ColorThemeContext);

    function handleMagicClick() {
        const colors = ["Mirage", "Aurora", "Frost", "Midnight"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColorTheme(randomColor);
    }

	return (
		<div className={"flex flex-col justify-center items-center h-full"}>
            <button
                className={`text-2xl font-semibold ${colorTheme}`}
                type="button"
                onClick={handleMagicClick}
            >
                <FaMagic size={56}/>
                {colorTheme}
            </button>
		</div>
	);
}
