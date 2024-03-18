import Link from "next/link";
import { FaLink } from "react-icons/fa6";

export default function LinkCard() {
	function handleClick() {
		window.open("https://resumef.com", "_blank");
	}

	return (
		<Link
			href={"/resume/resume.pdf"}
			target={"_blank"}
			className={"flex justify-evenly items-center h-full"}
		>
			<FaLink size={56} />
			<div className={"text-3xl font-bold"}>Resume</div>
		</Link>
	);
}
