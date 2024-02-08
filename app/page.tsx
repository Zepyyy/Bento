import Main from "@/app/(sections)/Main";
import Skills from "@/app/(sections)/Skills";
import Experiences from "@/app/(sections)/Experiences";
import Projects from "@/app/(sections)/Projects";
import Nav from "@/app/components/Nav";

export default function Home() {
	return (
		<main>
			<div className={"fixed top-1/2 -translate-y-1/2"}>
				<Nav />
			</div>
			<div className={"sections"}>
				<Main />
				<Skills />
				<Experiences />
				<Projects />
			</div>
		</main>
	);
}
