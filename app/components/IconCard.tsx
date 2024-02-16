import { FaGithub, FaLinkedin, FaMagic, FaSpotify } from "react-icons/fa";

function switchIcon(spec: string | undefined) {
	switch (spec) {
		case "github":
			return <FaGithub size={42} />;
		case "linkedin":
			return <FaLinkedin size={42} />;
		case "spotify":
			return <FaSpotify size={42} />;
		case "magic":
			return <FaMagic size={42} />;
		default:
			return <div> empty </div>;
	}
}

export default function IconCard({
	spec,
}: { spec: string | undefined }) {
	return (
		<div className={"flex flex-col justify-center items-center h-full"}>
			{spec ? switchIcon(spec) : null}
		</div>
	);
}
