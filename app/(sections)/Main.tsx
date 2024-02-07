"use client"

interface GridProps {
    col: number,
    row: number,
    colStart?: number,
    rowStart?: number,
    backgroundColor: string,
    text?: number,
    square?: boolean
}

function GridSquare({col, row, colStart, rowStart, backgroundColor, text, square}: GridProps) {

    let className= `rounded-3xl col-span-${col} row-span-${row} ${backgroundColor} col-start-${colStart} row-start-${rowStart}`
    if (square) {
        className += " aspect-square"
    }
    return (
        <div className={`${className}`}>{text}</div>
    )
}

export default function Main() {
    return (
		<div className={"h-screen bg"} id={"Home"}>
            <div className={"container m-auto grid grid-cols-12 grid-rows-8 gap-5 w-1/2 text-Mirage-700"}>
                {/*<div className={"col-span-6 row-span-6"}>1</div>*/}
                <GridSquare col={6} row={4} text={1} backgroundColor={"bg-gradient-to-b from-Mirage-300 to-Mirage-100"}/>
                <GridSquare col={2} row={2} colStart={7} text={2} square={true} backgroundColor={"bg-Mirage-200"}/>
                <GridSquare col={2} row={2} colStart={9} text={3} square={true} backgroundColor={"bg-Mirage-200"}/>
                <GridSquare col={2} row={2} colStart={11} text={4} square={true} backgroundColor={"bg-Mirage-200"}/>
                <GridSquare col={6} row={2} colStart={1} rowStart={5} text={5} backgroundColor={"bg-Mirage-500"}/>
                <GridSquare col={6} row={4} colStart={7} rowStart={3} text={6} backgroundColor={"bg-Mirage-300"}/>
                <GridSquare col={2} row={2} rowStart={7}  text={7} square={true} backgroundColor={"bg-Mirage-200"}/>
                <GridSquare col={6} row={2} colStart={3} rowStart={7} text={8} backgroundColor={"bg-Mirage-400"}/>
                <GridSquare col={4} row={2} colStart={10} rowStart={7} text={9} backgroundColor={"bg-Mirage-700"}/>
            </div>
            {/*<button onClick={"scrollTo('Skills')"}>Skills</button>*/}
		</div>
	);
}
