import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useEffect,
	useState,
} from "react";

export const ThemeContext = createContext<
	[string, Dispatch<SetStateAction<string>>]
>(["", () => {}]);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		// Apply the theme to the document on load
		document.documentElement.setAttribute("data-theme", theme);

		// Listen for system theme changes to automatically switch to dark/light mode
		const mq = window.matchMedia("(prefers-color-scheme: dark)");

		const changeTheme = (e: MediaQueryListEvent) => {
			const newTheme = e.matches ? "dark" : "light";
			setTheme(newTheme);
		};

		mq.addEventListener("change", changeTheme);

		return () => {
			mq.removeEventListener("change", changeTheme);
		};
	}, [theme]);

	return (
		<ThemeContext.Provider value={[theme, setTheme]}>
			{children}
		</ThemeContext.Provider>
	);
};
