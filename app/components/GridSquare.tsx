import IconCard from "@/app/components/IconCard";
import ListCard from "@/app/components/ListCard";
import PitchCard from "@/app/components/PitchCard";
import TextCard from "@/app/components/TextCard";
import MagicCard from "@/app/components/MagicCard";
import LinkCard from "@/app/components/LinkCard";
import MailCard from "./MailCard";
import { clsx } from "clsx";

import type { GridSquareProps } from "@/app/types/GridSquare";

export default function GridSquare({ ...props }: GridSquareProps) {
	function CardSwitch({ type }: { type: string }) {
		switch (type) {
			case "pitch":
				return <PitchCard />;
			case "icon":
				return <IconCard spec={props.spec} link={props.link} />;
			case "text":
				return (
					<TextCard
						title={props.title}
						text={props.text}
						titleIcon={props.titleIcon}
						textIcon={props.textIcon}
					/>
				);
			case "list":
				return <ListCard content={props.content} titleIcon={props.titleIcon} />;
			case "magic":
				return <MagicCard />;
			case "link":
				return <LinkCard />;
			case "mail":
				return <MailCard mail={props.mail} />;
			default:
				return <div> empty </div>;
		}
	}
	// Define base classes as an array

	const baseClasses = [
		"lg:rounded-2xl",
		"rounded-xl",
		`${props.backgroundColor}`,
		`${props.textColor}`,
		props.type === "pitch" || props.type === "list" || props.type === "text"
			? "lg:p-5"
			: "lg:p-0",
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

	const colClasses = Array.isArray(props.colSpan)
		? `lg:col-span-${props.colSpan[0]} col-span-${props.colSpan[1]}`
		: `lg:col-span-${props.colSpan} col-span-3`;

	const rowClasses = Array.isArray(props.rowSpan)
		? `lg:row-span-${props.rowSpan[0]} row-span-${props.rowSpan[1]}`
		: `lg:row-span-${props.rowSpan} row-span-1`;

	const rowStartClasses = Array.isArray(props.rowStart)
		? `lg:row-start-${props.rowStart[0]} row-start-${props.rowStart[1]}`
		: `lg:row-start-${props.rowStart}`;

	const colStartClasses = Array.isArray(props.colStart)
		? `lg:col-start-${props.colStart[0]} col-start-${props.colStart[1]}`
		: `lg:col-start-${props.colStart}`;

	return (
		<div
			className={clsx(
				baseClasses,
				colClasses,
				rowClasses,
				colStartClasses,
				rowStartClasses,
			)}
		>
			<CardSwitch type={props.type} />
		</div>
	);
}
