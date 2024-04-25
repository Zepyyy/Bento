import clsx from "clsx";

export default function Skill({
	width,
	height,
}: { width: number; height: number }) {
	return (
		<div
			className={clsx(
				"col-span-1 bg-blue-500 z-10",
				`w-${width}`,
				`h-${height}`,
			)}
		>
			<div className="bg-blue-300 z-20 w-full h-full">
				{width}*{height}
			</div>
		</div>
	);
}
