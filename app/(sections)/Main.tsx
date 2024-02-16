"use client";

import GridSquare from "@/app/components/GridSquare";
const gridItems = [
	{
		type: "pitch",
		col: 6,
		row: 4,
		colStart: 1,
		rowStart: 1,
		backgroundColor: "bg-gradient-to-t from-Mirage-100 to-Mirage-300",
	},
	{
		type: "icon",
		spec: "github",
		col: 2,
		row: 2,
		backgroundColor: "bg-Mirage-100",
	},
	{
		type: "icon",
		spec: "linkedin",
		col: 2,
		row: 2,
		backgroundColor: "bg-Mirage-200",
	},
	{
		type: "icon",
		spec: "spotify",
		col: 2,
		row: 2,
		backgroundColor: "bg-Mirage-300",
	},
	{
		type: "grid",
		col: 6,
		row: 2,
		colStart: 1,
		rowStart: 5,
		backgroundColor: "bg-Mirage-400",
        title: "123"
	},
	{
		type: "list",
		col: 6,
		row: 4,
		colStart: 7,
		rowStart: 3,
		backgroundColor: "bg-Mirage-500",
        title: "Skills",
        content: ["first", "second", "third"]
	},
	{
		type: "icon",
		spec: "magic",
		col: 2,
		row: 2,
		colStart: 1,
		rowStart: 7,
		backgroundColor: "bg-Mirage-600",
	},
	{
		type: "grid",
		col: 6,
		row: 2,
		colStart: 3,
		rowStart: 7,
		backgroundColor: "bg-Mirage-200",
        title: "456"
	},
	{
		type: "grid",
		col: 4,
		row: 2,
		colStart: 9,
		rowStart: 7,
		backgroundColor: "bg-Mirage-800",
        title: "789",
        text: "text"
	},
];

export default function Main() {
	return (
		<div className="h-screen flex flex-col justify-center items-center mx-16 md:items-end bg-bg md:mr-9 md:snap-start main">
			<div className="container md:grid md:grid-cols-12 md:gap-4 md:h-3/4 md:w-2/3">
				{gridItems.map((item,index) => (
					<GridSquare
						key={`${index}-${item.type}`} // Construct a unique key for each item
						col={item.col}
						row={item.row}
						colStart={item.colStart}
						rowStart={item.rowStart}
						backgroundColor={item.backgroundColor}
						type={item.type}
						spec={item.spec}
                        title={item.title}
                        content={item.content}
                        text={item.text}
					/>
				))}
			</div>
		</div>
	);
}
