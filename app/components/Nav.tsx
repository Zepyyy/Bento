import Link from "next/link";

export default function Nav() {
	return (
		<nav className={"flex flex-col fixed h-16"}>
			<Link href={"#home"} className={"text-Mirage-200"}>
				Home
			</Link>
			<Link href={"#skills"} className={"text-Mirage-200"}>
				Skills
			</Link>
			<Link href={"#experiences"} className={"text-Mirage-200"}>
				Experiences
			</Link>
			<Link href={"#projects"} className={"text-Mirage-200"}>
				Projects
			</Link>
		</nav>
	);
}
