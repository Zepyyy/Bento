import {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";

export const ColorThemeContext = createContext<
	[string, Dispatch<SetStateAction<string>>]
>(["Mirage", () => {}]);

// @ts-ignore
export const ColorThemeProvider = ({ children }) => {
	const [colorTheme, setColorTheme] = useState("Mirage");
	const [Theme, setTheme] = useState("");

	useEffect(() => {
		// Apply the theme to the document on load
		document.documentElement.setAttribute("data-theme", colorTheme);

		// Listen for system theme changes to automatically switch to dark/light mode
		const mq = window.matchMedia("(prefers-color-scheme: dark)");
		mq.addEventListener("change", (e) => {
			const newTheme = e.matches ? "dark" : "light";
			setTheme(newTheme);
		});

		return () => {
			mq.removeEventListener("change", (e) => {
				const newTheme = e.matches ? "dark" : "light";
				setColorTheme(newTheme);
			});
		};
	}, [colorTheme]);

	return (
		<ColorThemeContext.Provider value={[colorTheme, setColorTheme]}>
			<main>
				{children}
				<div className="flex flex-col bg-Color-200 text-Color-800 absolute top-0 left-0 z-50 p-2 rounded-br-md">
					<div>{colorTheme}</div>
					<div>{Theme}</div>
				</div>
			</main>
		</ColorThemeContext.Provider>
	);
};
