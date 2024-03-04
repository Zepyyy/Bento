import {createContext, Dispatch, SetStateAction, useState,} from "react";

export const ColorThemeContext = createContext<
	[string, Dispatch<SetStateAction<string>>]
>(["Mirage", () => {}]);

// @ts-ignore
export const ColorThemeProvider = ({ children }) => {
	const [colorTheme, setColorTheme] = useState("Mirage");

	return (
		<ColorThemeContext.Provider value={[colorTheme, setColorTheme]}>
			<main className={colorTheme}>{children}</main>
		</ColorThemeContext.Provider>
	);
};
