"use client";

interface GridProps {
	col: number;
	row: number;
	colStart?: number;
	rowStart?: number;
	backgroundColor: string;
	text?: number;
	square?: boolean;
}

function GridSquare({
	col,
	row,
	colStart,
	rowStart,
	backgroundColor,
	text,
	square,
}: GridProps) {
	let className = `rounded-3xl col-span-${col} row-span-${row} ${backgroundColor} text-Mirage-700 text-4xl flex justify-center items-center hover:bg-Mirage-300 hover:text-Mirage-100 transition duration-300 ease-in-out`;
	if (square) {
		className += " aspect-[1]";
	}
	if (colStart !== undefined) {
		className += ` col-start-${colStart}`;
	}
	if (rowStart !== undefined) {
		className += ` row-start-${rowStart}`;
	}
	return <div className={`${className}`}>{text}</div>;
}

export default function Main() {
	return (
        <div
            className={"h-screen flex flex-col justify-center items-end bg-bg mr-9"}
            id={"Home"}
        >
            <div className="container grid grid-cols-12 gap-5 h-3/5 w-2/3">
                <GridSquare col={6} row={4} colStart={1} rowStart={1} backgroundColor={"bg-Mirage-50"} text={1} />
                <GridSquare col={2} row={2} backgroundColor={"bg-Mirage-100"} text={2} square={false} />
                <GridSquare col={2} row={2} backgroundColor={"bg-Mirage-200"} text={3} square={false} />
                <GridSquare col={2} row={2} backgroundColor={"bg-Mirage-300"} text={4} square={false} />
                <GridSquare col={6} row={2} colStart={1} rowStart={5} backgroundColor={"bg-Mirage-400"} text={5} />
                <GridSquare col={6} row={4} colStart={7} rowStart={3} backgroundColor={"bg-Mirage-500"} text={6} />
                <GridSquare col={2} row={2} rowStart={7} backgroundColor={"bg-Mirage-600"} text={7} />
                <GridSquare col={6} row={2} colStart={6} rowStart={7} backgroundColor={"bg-Mirage-800"} text={8} />
                <GridSquare col={4} row={2} colStart={8} rowStart={7} backgroundColor={"bg-Mirage-800"} text={9} />
            </div>
        </div>
    );
}
