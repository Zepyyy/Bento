import { FaLink } from "react-icons/fa6";
import React from "react";

export default function LinkCard() {
	const handleClick = async () => {
		try {
			const response = await fetch(
				"https://cyesteemulteeflk.public.blob.vercel-storage.com/resume/Stubecki_Quentin_Resume-zeLCmPbQs0qWtP0F9z3VwJJ0OGTziS.pdf",
			);
			if (!response.ok) {
				throw new Error("Something went wrong while downloading the PDF");
			}
			const blob = await response.blob();

			// creates a URL for the blob and creates a link element to download the file
			const downloadUrl = window.URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = downloadUrl;
			link.setAttribute("download", "Stubecki_Quentin_Resume.pdf");
			document.body.appendChild(link);
			link.click(); // triggers the download
			if (link.parentNode) {
				link.parentNode.removeChild(link);
			}
		} catch (error) {
			console.error("Error downloading the PDF: ", error);
		}
	};

	return (
		<div
			className={
				"flex flex-col justify-center items-center h-full hover:animate-none"
			}
		>
			<button
				type="button"
				className={"flex h-full w-full justify-center items-center"}
				onClick={handleClick}
			>
				<FaLink size={56} className="mr-4" />
				<div className={"text-3xl font-bold"}>Resume</div>
			</button>
		</div>
	);
}
