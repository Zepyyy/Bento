import clsx from "clsx";

export default function Skill({
	name,
	category,
	delay,
}: {
	name: string;
	category: string;
	delay: number;
}) {
	const classes = clsx(
		"snap-start bg-Color-300 z-20 w-full h-full rounded-2xl text-center flex justify-center items-center cursor-pointer transition duration-300 hover:animate-tingle",
	);
	return (
		<div className="size-64 animate-scroll">
			<div className={classes} style={{ animationDelay: `${delay}ms` }}>
				{name}
			</div>
		</div>
	);
}
