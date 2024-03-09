export default function PitchCard() {
	const title = "Quentin Stubecki";

	return (
		<div
			className={
				"flex flex-col text-center md:text-start md:items-start h-full font-semibold"
			}
		>
			<div className={"text-2xl md:text-4xl"}>{title}</div>
			<div className="flex flex-col justify-evenly text-sm md:text-2xl text-pretty h-full">
				<div>
					I&lsquo;m a <span className={"text-highlight"}>developer</span>,
					guided by a love for technology, music and coffee.
				</div>
				<div>
					Stepping into <span className={"text-highlight"}>design</span> and
					React, eager to learn and explore new things.
				</div>
			</div>
		</div>
	);
}
