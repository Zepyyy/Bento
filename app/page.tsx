"use client";
import Experiences from "@/app/(sections)/Experiences";
import Main from "@/app/(sections)/Main";
import Projects from "@/app/(sections)/Projects";
import Skills from "@/app/(sections)/Skills";
import Nav from "@/app/components/Nav";
import { useEffect, useRef, useState } from "react";

export default function Home() {
	const [activeLink, setActiveLink] = useState("home");
	const sectionRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (sectionRef.current) {
				// color the nav link based on the section in view
				const section = sectionRef.current;
				const scroll = section.scrollTop;
				const main = section.getElementsByClassName("main")[0];
				const projects = section.getElementsByClassName("projects")[0];
				const skills = section.getElementsByClassName("skills")[0];
				const experiences = section.getElementsByClassName("experiences")[0];

				if (scroll < main.clientHeight) {
					setActiveLink("home");
				} else {
					if (scroll < main.clientHeight + projects.clientHeight) {
						setActiveLink("projects");
					} else {
						if (
							scroll <
							main.clientHeight + projects.clientHeight + skills.clientHeight
						) {
							setActiveLink("skills");
						} else {
							if (
								scroll <
								main.clientHeight +
									projects.clientHeight +
									experiences.clientHeight +
									skills.clientHeight
							) {
								setActiveLink("experiences");
							} else {
								setActiveLink("home");
							}
						}
					}
				}
			}
		};

		sectionRef.current?.addEventListener("scroll", handleScroll);

		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			sectionRef.current?.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<main>
			<div className={"fixed top-1/2 -translate-y-1/2 w-1/12"}>
				<Nav activeLink={activeLink} />
			</div>
			<div
				className={
					"bg-bg block md:overflow-y-scroll md:snap-y md:snap-mandatory md:h-screen"
				}
				ref={sectionRef}
			>
				<Main />
				<Projects />
				<Skills />
				<Experiences />
			</div>
		</main>
	);
}
