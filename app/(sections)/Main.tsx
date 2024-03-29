"use client";

import GridSquare from "@/app/components/GridSquare";

const gridItems = [
	{
		type: "pitch",
		colSpan: 6,
		rowSpan: 4,
		colStart: [1, 1],
		rowStart: [1, 1],
		backgroundColor: "dark:bg-Color-100 bg-Color-950",
		textColor: "dark:text-Color-950 text-Color-100",
	},
	{
		type: "icon",
		spec: "github",
		colSpan: [2, 1],
		rowSpan: 2,
		colStart: [9, 1],
		rowStart: [1, 2],
		backgroundColor: "dark:bg-Color-200 bg-Color-950",
		textColor: "dark:text-Color-950 text-Color-200",
		link: "https://github.com/Zepyyy",
	},
	{
		type: "icon",
		spec: "linkedin",
		colSpan: [2, 1],
		rowSpan: [2, 1],
		colStart: [11, 2],
		rowStart: [1, 2],
		backgroundColor: "dark:bg-Color-200 bg-Color-950",
		textColor: "dark:text-Color-950 text-Color-200",
		link: "https://www.linkedin.com/in/quentin-stubecki-211419227/",
	},
	{
		type: "icon",
		spec: "spotify",
		colSpan: [2, 1],
		rowSpan: [2, 1],
		colStart: [7, 3],
		rowStart: [1, 2],
		backgroundColor: "dark:bg-Color-200 bg-Color-950",
		textColor: "dark:text-Color-950 text-Color-200",
		link: "https://open.spotify.com/user/21ealn3abzhj75mxeoaeklfkq?si=4c6b75adb59a4f65",
	},
	{
		type: "text",
		colSpan: 6,
		rowSpan: 2,
		colStart: 1,
		rowStart: 5,
		backgroundColor: "bg-Color-500 dark:bg-Color-400",
		textColor: "text-Color-100 dark:text-Color-100",
		title: "123",
		text: "text",
	},
	{
		type: "list",
		colSpan: [6, 3],
		rowSpan: 4,
		colStart: 7,
		rowStart: 3,
		backgroundColor: "bg-Color-700 dark:bg-Color-300",
		textColor: "text-Color-100 dark:text-Color-950",
		title: "Skills",
		content: ["React", "Python", "Music", "Coffee", "Teamwork", "Notion"],
	},
	{
		type: "magic",
		colSpan: [2, 1],
		rowSpan: [2, 2],
		colStart: 1,
		rowStart: [7, 5],
		backgroundColor: "bg-Color-200 dark:bg-Color-800",
		textColor: "text-Color-950 dark:text-Color-100",
	},
	{
		type: "text",
		colSpan: [6, 3],
		rowSpan: 2,
		colStart: 3,
		rowStart: 7,
		backgroundColor: "bg-Color-700 dark:bg-Color-200",
		textColor: "text-Color-100 dark:text-Color-950",
		title: "456",
		text: "text",
	},
	{
		type: "link",
		colSpan: [4, 2],
		rowSpan: [2, 2],
		colStart: 9,
		rowStart: [7, 5],
		backgroundColor: "bg-Color-200 dark:bg-Color-950",
		textColor: "text-Color-950 dark:text-Color-100",
		title: "789",
		text: "text",
	},
];

export default function Main() {
	return (
		<div
			className="h-fit lg:h-screen flex flex-col justify-center items-center mx-10 lg:mx-16 lg:items-end lg:bg-bg lg:mr-9 lg:snap-start main"
			id="home"
		>
			<div className="lg:grid lg:grid-cols-12 lg:gap-4 lg:h-3/4 lg:w-2/3 grid grid-cols-3 gap-4 w-3/4">
				{gridItems.map((item, index) => (
					<GridSquare
						key={`${index}-${item.type}`} // Construct a unique key for each item
						{...item}
					/>
				))}
			</div>
		</div>
	);
}
