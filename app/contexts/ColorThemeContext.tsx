import {createContext, Dispatch, SetStateAction, useEffect, useState,} from "react";

export const ColorThemeContext = createContext<
	[string, Dispatch<SetStateAction<string>>]
>(["Mirage", () => {}]);

// @ts-ignore
export const ColorThemeProvider = ({ children }) => {
	const [colorTheme, setColorTheme] = useState("Mirage");
    const [Theme, setTheme] = useState("");

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");

        if (mq.matches) {
            setTheme("dark");
        }

        // This callback will fire if the preferred color scheme changes without a reload
        mq.addEventListener("change", (evt) =>
            setTheme(evt.matches ? "dark" : "light"),
        );
    }, []);

	return (
		<ColorThemeContext.Provider value={[colorTheme, setColorTheme]}>
            <main className={colorTheme}>
                {children}
                <div className="flex flex-col bg-Color-200 text-Color-800 absolute top-0 left-0 z-50 p-2 rounded-br-md">
                    <div>{colorTheme}</div>
                    <div>{Theme}</div>
                </div>
            </main>
		</ColorThemeContext.Provider>
	);
};
