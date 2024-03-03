import IconCard from "@/app/components/IconCard";
import ListCard from "@/app/components/ListCard";
import PitchCard from "@/app/components/PitchCard";
import TextCard from "@/app/components/TextCard";
import MagicCard from "@/app/components/MagicCard";

interface GridProps {
	type?: string;
	col: number;
	row: number;
	colStart?: number;
	rowStart?: number;
	backgroundColor: string;
	spec?: string;
	title?: string;
	content?: Array<string>;
	text?: string;
    link?: string;
}

export default function GridSquare({
	type,
	col,
	row,
	colStart,
	rowStart,
	backgroundColor,
	spec,
	title,
	content,
	text,
                                       link,
}: GridProps) {
	function cardSwitch(type: string | undefined) {
		switch (type) {
			case "pitch":
				return <PitchCard />;
			case "icon":
                return <IconCard spec={spec} link={link}/>;
			case "grid":
				return <TextCard title={title} text={text} />;
			case "list":
				return <ListCard title={title} content={content} />;
            case "magic":
                return <MagicCard/>;
			default:
				return <div> empty </div>;
		}
	}
	// Define base classes as an array
	const baseClasses = [
		"rounded-2xl",
		`${backgroundColor}`,
		"p-5",
		"text-Mirage-950",
        "hover:scale-[1.02]",
        "hover:shadow-md",
        "hover:bg-Mirage-300",
		"transition",
        "duration-500",
		"ease-in-out",
		"my-10",
		"md:m-0",
	];

	// Construct the grid classes based on props
	const gridClasses = `md:col-span-${col} row-span-${row} col-span-1 ${
		colStart ? ` md:col-start-${colStart} col-start-1 ` : ""
	}${rowStart ? ` row-start-${rowStart} ` : ""}`;

	// Join all classes together
	const className = [...baseClasses, gridClasses].join(" ");

	return <div className={className}>{cardSwitch(type)}</div>;
}
