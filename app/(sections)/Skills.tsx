import Skill from "../components/skill";

export default function Skills() {
	const skills = {
		Soft: [
			"Teamwork",
			"Problem-solving",
			"Communication",
			"Adaptability",
			"Time Management",
			"Leadership",
			"Critical Thinking",
		],
		Engineering: [
			"Git",
			"Vercel",
			"Notion",
			"Figma",
			"VS Code",
			"IntelliJ IDEA",
			"Jira",
			"Confluence",
			"Postman",
			"Bruno",
			"Agile",
			"Scrum",
			"Docker",
			"Windows",
			"Linux",
		],
		Software: ["C++", "C#", ".Net", "Python", "Delphi"],
		Web: [
			"HTML",
			"CSS",
			"JavaScript",
			"TypeScript",
			"React",
			"Next.js",
			"Node.js",
		],
		Database: ["MySQL", "SQL Server", "PostGreSQL", "MongoDB"],
	};

	return (
		<div
			className="flex h-screen lg:flex-col justify-center items-end bg-bg mr-9 snap-start skills"
			id="skills"
		>
			<div className="h-auto w-2/3 p-5 text-Color-950 transition duration-300 ease-in-out my-24 overflow-x-auto grid grid-flow-col grid-rows-3 gap-4 rounded-lg">
				{Object.entries(skills).map(([category, skills]) =>
					skills.map((skill) => (
						<Skill key={skill} name={skill} category={category} delay={100} />
					)),
				)}
			</div>
		</div>
	);
}
