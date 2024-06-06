import Skill from "../components/skill";
import { skillsJson } from "../assets/skillsJson";

export default function Skills() {
	return (
		<div
			className="flex h-screen lg:flex-col justify-center items-end bg-bg snap-start skills overflow-visible"
			id="skills"
		>
			<div className="flex flex-wrap flex-col items-center justify-center h-3/4 w-2/3 p-5 text-Color-950 bg-grey-200">
				{Object.entries(skillsJson).map(([category, skills]) =>
					skills.map((skill) => (
						<Skill key={skill} name={skill} category={category} />
					)),
				)}
			</div>
		</div>
	);
}
