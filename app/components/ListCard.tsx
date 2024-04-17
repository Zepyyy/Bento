import { FaRegHeart } from "react-icons/fa";

interface ListSquareProps {
	content?: Array<string>;
	titleIcon?: string;
}

function switchIcon(spec: string | undefined) {
	switch (spec) {
		case "heart":
			return (
				<FaRegHeart className="absolute top-0 right-0 lg:text-[52px] text-[32px]" />
			);
		default:
			return <div> empty </div>;
	}
}

export default function ListCard({ content, titleIcon }: ListSquareProps) {
	return (
		<div className={"flex flex-col font-bold h-full w-full"}>
			<div className="relative">{switchIcon(titleIcon)}</div>
			<ul
				className={
					"flex flex-col justify-center text-md md:text-xl lg:text-2xl font-semibold h-full"
				}
			>
				{content
					? content.map((item, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<li key={index} className={"my-2"}>
								<div>{item}</div>
							</li>
					  ))
					: ""}
			</ul>
		</div>
	);
}
