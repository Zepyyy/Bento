import { LuMapPin } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";

interface TextCardProps {
	title?: string;
	text?: string;
	titleIcon: string;
	textIcon: string;
}

function SwitchIcon({ icon }: { icon: string }) {
	switch (icon as string) {
		case "cap":
			return (
				<RiGraduationCapLine className="hidden md:flex absolute top-0 right-0 lg:text-[46px] text-[36px]" />
			);
		case "pin":
			return <LuMapPin className="hidden md:flex text-[16px] lg:text-[26px]" />;
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
			<div className="relative">
				<SwitchIcon icon={titleIcon} />
			</div>
			<div className="flex flex-col justify-center w-full h-full">
				<div className={"text-md md:text-xl lg:text-2xl font-bold"}>
					{title}
				</div>
				<div
					className={"flex md:items-center md:ml-8 font-semibold opacity-75"}
				>
					<SwitchIcon icon={textIcon} />
					<div className={"text-md md:text-xl lg:text-2xl"}>{text}</div>
				</div>
			</div>
		</div>
	);
}
