"use client";

import PitchCard from "@/app/components/PitchCard";
import IconCard from "@/app/components/IconCard";

interface GridProps {
	type?: string;
	col: number;
	row: number;
	colStart?: number;
	rowStart?: number;
	backgroundColor: string;
	spec?: string;
}

function cardSwitch(type: string | undefined, spec: string | undefined) {
	switch (type) {
		case "Pitch":
			return <PitchCard />;
		case "Icon":
			return <IconCard type={type} spec={spec} />;
		default:
			return <div> empty </div>;
	}
}

function GridSquare({
	type,
	col,
	row,
	colStart,
	rowStart,
	backgroundColor,
	spec,
}: GridProps) {
	// Define base classes as an array
	const baseClasses = [
		"rounded-3xl",
		`${backgroundColor}`,
		"p-5",
		"text-Mirage-950",
		"hover:bg-Mirage-300",
		"hover:text-Mirage-100",
		"transition",
		"duration-300",
		"ease-in-out",
	];

	// Construct the grid classes based on props
	const gridClasses = `col-span-${col} row-span-${row}${
		colStart ? ` col-start-${colStart}` : ""
	}${rowStart ? ` row-start-${rowStart}` : ""}`;

	// Join all classes together
	const className = [...baseClasses, gridClasses].join(" ");
	const Middle = cardSwitch(type, spec);

	return <div className={className}>{Middle}</div>;
}

export default function Main() {
	return (
		<div
			className={
				"h-screen flex flex-col justify-center items-end bg-bg mr-9 main"
			}
			id={"home"}
		>
			<div className="container grid grid-cols-12 gap-5 h-3/5 w-2/3">
				<GridSquare
					col={6}
					row={4}
					colStart={1}
					rowStart={1}
					backgroundColor={"bg-gradient-to-t from-Mirage-100 to-Mirage-300"}
					type={"Pitch"}
				/>
				<GridSquare
					col={2}
					row={2}
					backgroundColor={"bg-Mirage-100"}
					type={"Icon"}
					spec={"github"}
				/>
				<GridSquare
					col={2}
					row={2}
					backgroundColor={"bg-Mirage-200"}
					type={"Icon"}
					spec={"linkedin"}
				/>
				<GridSquare
					col={2}
					row={2}
					backgroundColor={"bg-Mirage-300"}
					type={"Icon"}
					spec={"spotify"}
				/>
				<GridSquare
					col={6}
					row={2}
					colStart={1}
					rowStart={5}
					backgroundColor={"bg-Mirage-400"}
				/>
				<GridSquare
					col={6}
					row={4}
					colStart={7}
					rowStart={3}
					backgroundColor={"bg-Mirage-500"}
				/>
				<GridSquare
					col={2}
					row={2}
					colStart={1}
					rowStart={7}
					backgroundColor={"bg-Mirage-600"}
					type={"Icon"}
					spec={"magic"}
				/>
				<GridSquare
					col={6}
					row={2}
					colStart={3}
					rowStart={7}
					backgroundColor={"bg-Mirage-200"}
				/>
				<GridSquare
					col={4}
					row={2}
					colStart={9}
					rowStart={7}
					backgroundColor={"bg-Mirage-800"}
				/>
			</div>
		</div>
	);
}
