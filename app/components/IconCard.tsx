import {FaGithub, FaLinkedin, FaSpotify} from "react-icons/fa";
import Link from "next/link";

function switchIcon(spec: string | undefined) {
	switch (spec) {
		case "github":
            return <FaGithub size={56}/>;
		case "linkedin":
            return <FaLinkedin size={56}/>;
		case "spotify":
            return <FaSpotify size={56}/>;
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
                className={"flex flex-col justify-center items-center h-full"}
            >
                {spec ? switchIcon(spec) : null}
            </Link>
        );
    }
}
