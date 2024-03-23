import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import Link from "next/link";

function switchIcon(spec: string | undefined) {
	switch (spec) {
		case "github":
			return <FaGithub className="lg:text-[56px] text-[36px]" />;
		case "linkedin":
			return <FaLinkedin className="lg:text-[56px] text-[36px]" />;
		case "spotify":
			return <FaSpotify className="lg:text-[56px] text-[36px]" />;
		default:
			return <div> empty </div>;
	}
}

export default function IconCard({
	spec,
	link,
}: { spec: string | undefined; link: string | undefined }) {
	if (link) {
		return (
			<Link
				href={link}
				target="_blank"
				rel="noreferrer"
				className={
					"flex flex-col justify-center items-center h-full hover:animate-none p-5"
				}
			>
				{spec ? switchIcon(spec) : null}
			</Link>
		);
	}
}
