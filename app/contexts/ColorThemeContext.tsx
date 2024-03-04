import {createContext, Dispatch, SetStateAction, useState} from "react";

export const ColorThemeContext = createContext<
	[string, Dispatch<SetStateAction<string>>]
>(["Mirage", () => {}]);

// @ts-ignore
export const ColorThemeProvider = ({ children }) => {
	const [colorTheme, setColorTheme] = useState("Mirage");

	return (
		<ColorThemeContext.Provider value={[colorTheme, setColorTheme]}>
            <main className={colorTheme}>
                {children}
                <div className="bg-Color-200 text-Color-800 absolute top-0 left-0 z-50 p-2 rounded-br-md">
                    {colorTheme}
                </div>
            </main>
		</ColorThemeContext.Provider>
	);
};
