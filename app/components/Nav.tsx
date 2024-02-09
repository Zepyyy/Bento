import Link from "next/link";

interface navProps {
	activeLink: string;
}
export default function Nav({ activeLink }: navProps) {
	const isActive = "text-Mirage-700 bg-Mirage-300";
	console.log(activeLink);
	return (
		<nav className={"flex flex-col "}>
			<Link href={"#home"} className={activeLink === "home" ? isActive : ""}>
				Home
			</Link>
			<Link
				href={"#skills"}
				className={activeLink === "skills" ? isActive : ""}
			>
				Skills
			</Link>
			<Link
				href={"#experiences"}
				className={activeLink === "experiences" ? isActive : ""}
			>
				Experiences
			</Link>
			<Link
				href={"#projects"}
				className={activeLink === "projects" ? isActive : ""}
			>
				Projects
			</Link>
		</nav>
	);
}
