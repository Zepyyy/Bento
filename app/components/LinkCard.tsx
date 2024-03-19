import Link from "next/link";
import { FaLink } from "react-icons/fa6";

export default function LinkCard() {
	return (
		<Link
			href={"/assets/resume.pdf"}
			target={"_blank"}
			rel="noopener noreferrer"
			locale={false}
			className={"flex justify-evenly items-center h-full"}
			download
		>
			<FaLink size={56} />
			<div className={"text-3xl font-bold"}>Resume</div>
		</Link>
	);
}
