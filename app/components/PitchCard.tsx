export default function PitchCard() {
	return (
		<div
			className={
				"flex flex-col text-center md:text-start md:items-start h-full font-semibold"
			}
		>
			<div className={"text-md md:text-2xl lg:text-4xl"}>Quentin Stubecki</div>
			<div className="flex flex-col justify-evenly text-md md:text-xl lg:text-2xl text-pretty h-full">
				<div>
					I&lsquo;m a <span className={"text-Color-500"}>developer</span>,
					guided by a love for technology, music and coffee.
				</div>
				<div>
					Stepping into <span className={"text-Color-500"}>design</span> and
					React, eager to learn and explore new things.
				</div>
			</div>
		</div>
	);
}
