import { FaRegHeart } from "react-icons/fa";

interface ListSquareProps {
	content?: Array<string>;
	titleIcon: string;
}

function Icon({ spec }: { spec: string }) {
	return spec === "heart" ? (
		<FaRegHeart className="lg:text-[56px] text-[36px]" />
	) : (
		<div> empty </div>
	);
}

export default function ListCard({ content, titleIcon }: ListSquareProps) {
	return (
		<div className={"flex flex-col font-bold h-full w-full"}>
			<div className="relative">
				<Icon spec={titleIcon} />
			</div>
			<ul
				className={
					"flex flex-col justify-center text-md md:text-xl lg:text-2xl font-semibold h-full"
				}
			>
				{content
					? content.map((item) => (
							<li key={item} className={"my-2"}>
								<div>{item}</div>
							</li>
					  ))
					: ""}
			</ul>
		</div>
	);
}
