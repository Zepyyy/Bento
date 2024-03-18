interface ListSquareProps {
	title?: string;
	content?: Array<string>;
}

export default function ListCard({ title, content }: ListSquareProps) {
	return (
		<div className={"flex flex-col text-3xl font-bold text-text h-full"}>
			{title}
			<ul
				className={"flex flex-col justify-evenly text-2xl font-semibold h-full"}
			>
				{content
					? content.map((item, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<li key={index} className={"text-xl text-text"}>
								{item}
							</li>
					  ))
					: ""}
			</ul>
		</div>
	);
}
