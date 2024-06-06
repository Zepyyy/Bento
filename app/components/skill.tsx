import clsx from "clsx";

function categoryColor(category: string) {
	switch (category) {
		case "Soft":
			return "bg-Color-200";
		case "Engineering":
			return "bg-Color-300";
		case "Software":
			return "bg-Color-400";
		case "Web":
			return "bg-Color-500";
		case "Database":
			return "bg-Color-600";
		default:
			return "bg-Color-800";
	}
}
export default function Skill(props: { name: string; category: string }) {
	const classes = clsx(
		"w-56 h-56 z-20 rounded-2xl text-center flex justify-center items-center cursor-pointer m-3 select-none",
		categoryColor(props.category),
	);
	return (
		<div className={classes}>
			<div>{props.name}</div>
		</div>
	);
}
