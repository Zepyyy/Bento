import Link from "next/link";

interface navProps {
	activeLink: string;
}

export default function Nav({ activeLink }: navProps) {
	const links = [
		{ href: "#home", name: "Home" },
		{ href: "#projects", name: "Projects" },
		{ href: "#skills", name: "Skills" },
		{ href: "#experiences", name: "Experiences" },
	];

	return (
		<nav>
			<div className="lg:flex lg:flex-col hidden">
				{links.map((link) => (
					<div
						key={link.name}
						className="relative flex items-center my-1 ml-16"
					>
						{/* Link and text */}
						<Link
							href={link.href}
							className={
								"relative z-10 px-4 py-2 ml-8 text-text transition-colors duration-300"
							}
						>
							{link.name}
						</Link>
						{/* Active link indicator */}
						<div
							className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 ${
								activeLink === link.name.toLowerCase() ? "w-6" : "w-3"
							} bg-Color-300 transition-all duration-300`}
						/>
					</div>
				))}
			</div>
		</nav>
	);
}
