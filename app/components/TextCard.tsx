import { LuMapPin } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";

interface TextCardProps {
	title?: string;
	text?: string;
	titleIcon?: string;
	textIcon?: string;
}
function switchIcon(icon: string | undefined) {
	switch (icon) {
		case "cap":
			return (
				<RiGraduationCapLine className="absolute top-0 right-0 lg:text-[46px] text-[26px]" />
			);
		case "pin":
			return <LuMapPin className="lg:text-[36px] text-[16px]" />;
		default:
			return <div> empty </div>;
	}
}

export default function TextCard({
	title,
	text,
	titleIcon,
	textIcon,
}: TextCardProps) {
	return (
		<div className={"flex flex-col h-full w-full"}>
			<div className="relative dark:text-Color-800 text-Color-100">
				{titleIcon ? switchIcon(titleIcon) : ""}
			</div>
			<div className="flex flex-col justify-center w-full h-full">
				<div className={"text-3xl font-bold"}>{title}</div>
				<div
					className={
						"flex items-center ml-8 text-Color-200 dark:text-Color-800"
					}
				>
					{textIcon ? switchIcon(textIcon) : ""}
					<div className={"text-2xl font-semibold ml-2"}> {text} </div>
				</div>
			</div>
		</div>
	);
}
