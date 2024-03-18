interface TextCardProps {
	title?: string;
	text?: string;
}

export default function TextCard({ title, text }: TextCardProps) {
	return (
		<div className={"flex flex-col justify-center items-start h-fit"}>
			{title ? (
				<div className={"text-3xl font-bold text-text"}>{title}</div>
			) : (
				""
			)}
			{text ? (
				<div className={"text-2xl font-semibold text-text"}> {text} </div>
			) : (
				""
			)}
		</div>
	);
}
