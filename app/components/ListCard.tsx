interface ListSquareProps {
    title?: string;
    content?: Array<string>;
}

export default function ListCard({title, content}: ListSquareProps) {
    return (
    <ul className={"text-2xl font-semibold"}>
        {title ? <li className={"text-3xl font-bold"}>{title}</li> : ""}
        {content ? content.map((item, index) => <li key={`${index}-${title}`}>{item}</li>) : ""}
    </ul>
    )

}