export type GridSquareProps = {
	type: string;
	colSpan: number | Array<number>;
	rowSpan: number | Array<number>;
	colStart?: number | Array<number>;
	rowStart?: number | Array<number>;
	backgroundColor: string;
	textColor?: string;
	spec: string;
	title?: string;
	content?: Array<string>;
	text?: string;
	link: string;
	titleIcon: string;
	textIcon: string;
	mail: string;
};
