interface IconProps {
	type?: string;
	spec?: string;
}
export default function IconCard({ type, spec }: IconProps) {
	// Construct the grid classes based on props
	return (
		<div className={"flex flex-col justify-center items-center text-3xl"}>
			{type}
			{spec}
		</div>
	);
}
