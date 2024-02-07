import Main from "@/app/(sections)/Main";
import Skills from "@/app/(sections)/Skills";
import Experiences from "@/app/(sections)/Experiences";
import Projects from "@/app/(sections)/Projects";
import Nav from "@/app/components/Nav";

export default function Home() {
	return (
		<main className="bg-bg">
			<Nav />
			<div
				className={"flex flex-col justify-center items-center text-Mirage-200"}
			>
				<Main />
				<Skills />
				<Experiences />
				<Projects />
			</div>
		</main>
	);
}
