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
		<ul className={"text-2xl font-semibold"}>
            {title ? (
                <li
                    className={`text-3xl font-bold ${
                        invertedTextColor ? "text-inverted" : "text-text"
                    }`}
                >
                    {title}
                </li>
            ) : (
                ""
            )}
			{content
				? content.map((item, index) => (
                    <li
                        key={`${index}-${title}`}
                        className={`${invertedTextColor ? "text-inverted" : "text-text"}`}
                    >
                        {item}
                    </li>
				  ))
				: ""}
		</ul>
	);
}
