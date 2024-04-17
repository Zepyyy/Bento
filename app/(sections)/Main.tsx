"use client";

import GridSquare from "@/app/components/GridSquare";
import gridItems from "@/app/data/gridItems.json";

export default function Main() {
	return (
		<div
			className="h-fit lg:h-screen flex flex-col justify-center items-center mx-10 lg:mx-16 lg:items-end lg:bg-bg lg:mr-9 lg:snap-start main"
			id="home"
		>
			<div className="lg:grid lg:grid-cols-12 lg:gap-4 lg:h-3/4 lg:w-2/3 grid grid-cols-3 gap-4 w-3/4">
				{gridItems.map((item, index) => (
					<GridSquare
						key={`${index}-${item.type}`} // Construct a unique key for each item
						titleIcon=""
						textIcon=""
						spec=""
						link=""
						mail=""
						{...item}
					/>
				))}
			</div>
		</div>
	);
}
