interface MailCardProps {
	mail?: string;
}

export default function MailCard({ mail }: MailCardProps) {
	return (
		<div className="flex w-full h-full">
			<a
				href="mailto:quentin.stubecki@viacesi.fr"
				className={
					"flex justify-center items-center font-bold h-full w-full text-sm sm:text-md md:text-xl lg:text-2xl lg:p-8 p-6 underline hover:no-underline"
				}
			>
				{mail}
			</a>
		</div>
	);
}
