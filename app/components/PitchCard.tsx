export default function PitchCard() {
	const title = "Quentin Stubecki";

	return (
		<div className={"text-center md:text-start md:items-start h-fit"}>
			<div className="text-base md:text-4xl font-semibold">{title}</div>
			<div className="container">
				<div className="text-sm md:text-2xl font-semibold">
					I&lsquo;m a <span className={"text-Mirage-400"}>developer</span>,
					guided by a love for technology, music and coffee.
				</div>
				<div className="text-sm md:text-2xl font-semibold mt-2 md:mt-8">
					Stepping into <span className={"text-Mirage-400"}>design</span> and
					React, eager to learn and explore new things.
				</div>
			</div>
		</div>
	);
}
