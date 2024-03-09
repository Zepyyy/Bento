"use client";

import GridSquare from "@/app/components/GridSquare";

const gridItems = [
	{
		type: "pitch",
		col: 6,
		row: 4,
		colStart: 1,
		rowStart: 1,
		backgroundColor: "bg-gradient-to-t from-Color-100 to-Color-300",
	},
	{
		type: "icon",
		spec: "github",
		col: 2,
		row: 2,
		backgroundColor: "bg-Color-200",
		link: "https://github.com/Zepyyy",
	},
	{
		type: "icon",
		spec: "linkedin",
		col: 2,
		row: 2,
		backgroundColor: "bg-Color-200",
		link: "https://www.linkedin.com/in/quentin-stubecki-211419227/",
	},
	{
		type: "icon",
		spec: "spotify",
		col: 2,
		row: 2,
		backgroundColor: "bg-Color-200",
		link: "https://open.spotify.com/user/21ealn3abzhj75mxeoaeklfkq?si=4c6b75adb59a4f65",
	},
	{
		type: "text",
		col: 6,
		row: 2,
		colStart: 1,
		rowStart: 5,
		backgroundColor: "bg-Color-400",
		invertedTextColor: true,
		title: "123",
		text: "text",
	},
	{
		type: "list",
		col: 6,
		row: 4,
		colStart: 7,
		rowStart: 3,
		backgroundColor: "bg-Color-300",
		invertedTextColor: false,
		title: "Skills",
		content: [
			"Music",
			"Technology",
			"Web development",
			"Coffee",
			"other stuff...",
		],
	},
	{
		type: "magic",
		col: 2,
		row: 2,
		colStart: 1,
		rowStart: 7,
		backgroundColor: "bg-Color-200",
	},
	{
		type: "text",
		col: 6,
		row: 2,
		colStart: 3,
		rowStart: 7,
		backgroundColor: "bg-Color-200",
		title: "456",
		text: "text",
	},
	{
		type: "text",
		col: 4,
		row: 2,
		colStart: 9,
		rowStart: 7,
		backgroundColor: "bg-Color-950",
		invertedTextColor: true,
		title: "789",
		text: "text",
	},
];

export default function Main() {
	return (
		<div className="h-fit md:h-screen flex flex-col justify-center items-center mx-10 md:mx-16 md:items-end md:bg-bg md:mr-9 md:snap-start main">
			<div className="container md:grid md:grid-cols-12 md:gap-4 md:h-3/4 md:w-2/3">
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
