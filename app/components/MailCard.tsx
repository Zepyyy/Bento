interface MailCardProps {
	mail?: string;
}

export default function MailCard({ mail }: MailCardProps) {
	return (
		<div className="flex w-full h-full">
			<a
				href="mailto:quentin.stubecki@viacesi.fr"
				className={
					"flex justify-center items-center text-3xl font-bold h-full w-full p-8 underline hover:no-underline"
				}
			>
				{mail}
			</a>
		</div>
	);
}
