import IconCard from "@/app/components/IconCard";
import ListCard from "@/app/components/ListCard";
import PitchCard from "@/app/components/PitchCard";
import TextCard from "@/app/components/TextCard";
import MagicCard from "@/app/components/MagicCard";
import LinkCard from "@/app/components/LinkCard";

interface GridProps {
	type?: string;
	col: number;
	row: number;
	colStart?: number;
	rowStart?: number;
	backgroundColor: string;
	textColor?: string;
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
	textColor,
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
				return <IconCard spec={spec} link={link} />;
			case "text":
				return <TextCard title={title} text={text} />;
			case "list":
				return <ListCard title={title} content={content} />;
			case "magic":
				return <MagicCard />;
			case "link":
				return <LinkCard />;
			default:
				return <div> empty </div>;
		}
	}
	// Define base classes as an array
	const baseClasses = [
		"rounded-2xl",
		`${backgroundColor}`,
		`${textColor}`,
		type === "icon" || type === "magic" || type === "link" ? "p-0" : "p-5",
		"hover:shadow-md",
		"hover:scale-[1.02]",
		"hover:bg-Color-300 dark:hover:bg-Color-800",
		"hover:text-Color-900 dark:hover:text-Color-100",
		"transition",
		"duration-500",
		"ease-in-out",
		"my-10",
		"lg:m-0",
	];

	// Construct the grid classes based on props
	const gridClasses = `lg:col-span-${col} lg:row-span-${row} col-span-1 ${
		colStart ? ` lg:col-start-${colStart} col-start-1 ` : ""
	}${rowStart ? ` lg:row-start-${rowStart} ` : ""}`;

	// Join all classes together
	const className = [...baseClasses, gridClasses].join(" ");

	return <div className={className}>{cardSwitch(type)}</div>;
}
