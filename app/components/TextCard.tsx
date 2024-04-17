import { LuMapPin } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";

interface TextCardProps {
	title?: string;
	text?: string;
	titleIcon: string;
	textIcon: string;
}

function Icon({ icon }: { icon: string }) {
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

export default function TextCard({ ...props }: TextCardProps) {
	return (
		<div className={"flex flex-col h-full w-full"}>
			<div className="relative">
				<Icon icon={props.titleIcon} />
			</div>
			<div className="flex flex-col justify-center w-full h-full">
				<div className={"text-md md:text-xl lg:text-2xl font-bold"}>
					{props.title}
				</div>
				<div
					className={"flex md:items-center md:ml-8 font-semibold opacity-75"}
				>
					<Icon icon={props.textIcon} />
					<div className={"text-md md:text-xl lg:text-2xl"}>{props.text}</div>
				</div>
			</div>
		</div>
	);
}
