import IconCard from "@/app/components/IconCard";
import ListCard from "@/app/components/ListCard";
import PitchCard from "@/app/components/PitchCard";
import TextCard from "@/app/components/TextCard";
import MagicCard from "@/app/components/MagicCard";
import LinkCard from "@/app/components/LinkCard";
import MailCard from "./MailCard";

interface GridProps {
	type?: string;
	colSpan: number | Array<number>;
	rowSpan: number | Array<number>;
	colStart?: number | Array<number>;
	rowStart?: number | Array<number>;
	backgroundColor: string;
	textColor?: string;
	spec?: string;
	title?: string;
	content?: Array<string>;
	text?: string;
	link?: string;
	titleIcon?: string;
	textIcon?: string;
	mail?: string;
}

export default function GridSquare({
	type,
	colSpan,
	rowSpan,
	colStart,
	rowStart,
	backgroundColor,
	textColor,
	spec,
	title,
	content,
	text,
	link,
	titleIcon,
	textIcon,
	mail,
}: GridProps) {
	function cardSwitch(type: string | undefined) {
		switch (type) {
			case "pitch":
				return <PitchCard />;
			case "icon":
				return <IconCard spec={spec} link={link} />;
			case "text":
				return (
					<TextCard
						title={title}
						text={text}
						titleIcon={titleIcon}
						textIcon={textIcon}
					/>
				);
			case "list":
				return <ListCard content={content} titleIcon={titleIcon} />;
			case "magic":
				return <MagicCard />;
			case "link":
				return <LinkCard />;
			case "mail":
				return <MailCard mail={mail} />;
			default:
				return <div> empty </div>;
		}
	}
	// Define base classes as an array

	const baseClasses = [
		"lg:rounded-2xl",
		"rounded-xl",
		`${backgroundColor}`,
		`${textColor}`,
		type === "pitch"
			? "p-5"
			: type === "list"
			  ? "p-5"
			  : type === "text"
				  ? "p-5"
				  : "p-0",
		"hover:shadow-md",
		"hover:scale-[1.02]",
		"hover:bg-Color-300 dark:hover:bg-Color-800",
		"hover:text-Color-900 dark:hover:text-Color-100",
		"transition",
		"duration-500",
		"ease-in-out",
		"lg:m-0",
		"h-full",
	];

	const colClasses = Array.isArray(colSpan)
		? `lg:col-span-${colSpan[0]} col-span-${colSpan[1]}`
		: `lg:col-span-${colSpan} col-span-3`;

	const rowClasses = Array.isArray(rowSpan)
		? `lg:row-span-${rowSpan[0]} row-span-${rowSpan[1]}`
		: `lg:row-span-${rowSpan} row-span-1`;

	const rowStartClasses = Array.isArray(rowStart)
		? `lg:row-start-${rowStart[0]} row-start-${rowStart[1]}`
		: `lg:row-start-${rowStart}`;

	const colStartClasses = Array.isArray(colStart)
		? `lg:col-start-${colStart[0]} col-start-${colStart[1]}`
		: `lg:col-start-${colStart}`;

	const gridClasses = `${colClasses} ${rowClasses} ${colStartClasses} ${rowStartClasses}`;

	// Join all classes together
	const className = [...baseClasses, gridClasses].join(" ");

	return <div className={className}>{cardSwitch(type)}</div>;
}
