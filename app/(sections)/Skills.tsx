import Skill from "../components/skill";

export default function Skills() {
	const skills = {
		soft: [
			"Teamwork",
			"Problem-solving",
			"Communication",
			"Adaptability",
			"Time Management",
			"Leadership",
			"Critical Thinking",
		],
		hard: {
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
		},
	};

	return (
		<div
			className={
				"flex h-screen lg:flex-col justify-center items-end bg-bg snap-start skills"
			}
			id="skills"
		>
			<div
				className={
					"rounded-2xl bg-Color-200 w-2/3 h-full p-5 text-Color-950 hover:bg-Color-300 hover:text-Color-100 transition duration-300 ease-in-out my-24"
				}
			>
				<div className="grid grid-cols-4 col-auto row-auto gap-4">
					<Skill width={32} height={64} />
					<Skill width={64} height={32} />
					<Skill width={32} height={32} />
					<Skill width={32} height={32} />
					<Skill width={32} height={32} />
					<Skill width={64} height={64} />
					<Skill width={64} height={64} />
					<Skill width={64} height={64} />
					<Skill width={64} height={64} />
					<Skill width={32} height={32} />
				</div>
			</div>
		</div>
	);
}
