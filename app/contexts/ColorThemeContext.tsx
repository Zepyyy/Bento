import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";

export const ColorThemeContext = createContext<
	[string, Dispatch<SetStateAction<string>>]
>(["", () => {}]);

export const ColorThemeProvider = ({ children }: { children: JSX.Element }) => {
	const [colorTheme, setColorTheme] = useState("Mirage");

	useEffect(() => {
		// Apply the theme to the document on load
		document.documentElement.setAttribute("data-colorTheme", colorTheme);
	}, [colorTheme]);

	return (
		<ColorThemeContext.Provider value={[colorTheme, setColorTheme]}>
			{children}
		</ColorThemeContext.Provider>
	);
};
