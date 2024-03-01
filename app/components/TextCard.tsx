interface TextCardProps {
	title?: string;
	text?: string;
}

export default function TextCard({ title, text }: TextCardProps) {
	return (
		<div className={"flex flex-col justify-center items-start h-fit"}>
			{title ? <div className={"text-3xl font-bold"}>{title}</div> : ""}
			{text ? (
				<div className={"container"}>
					{" "}
					<div className={"text-2xl font-semibold"}> </div>{" "}
				</div>
			) : (
				""
			)}
		</div>
	);
}
