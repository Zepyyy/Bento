interface ListSquareProps {
	title?: string;
	content?: Array<string>;
	invertedTextColor?: boolean;
}

export default function ListCard({
	title,
	content,
	invertedTextColor,
}: ListSquareProps) {
	return (
		<div
			className={`flex flex-col text-3xl font-bold ${
				invertedTextColor ? "text-inverted" : "text-text"
			} h-full`}
		>
			{title}
			<ul
				className={"flex flex-col justify-evenly text-2xl font-semibold h-full"}
			>
				{content
					? content.map((item, index) => (
							<li
								key={index}
								className={`text-xl ${
									invertedTextColor ? "text-inverted" : "text-text"
								}`}
							>
								{item}
							</li>
					  ))
					: ""}
			</ul>
		</div>
	);
}
