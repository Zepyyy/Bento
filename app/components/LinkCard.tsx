import { FaLink } from "react-icons/fa6";
import React from "react";

export default function LinkCard() {
	const handleClick = async (lang: "English" | "French") => {
		try {
			const resumes = {
				English:
					"https://cyesteemulteeflk.public.blob.vercel-storage.com/Resumes/Stubecki_Quentin_Resume-J4u2W4rMQEawDBsxR6NSWysQXQtSSK.pdf",
				French:
					"https://cyesteemulteeflk.public.blob.vercel-storage.com/Resumes/Stubecki_Quentin_CV-6dPHTt9c7CBcLCLOvDooNxqOSc8OSE.pdf",
			};

			const response = await fetch(resumes[lang]);
			if (!response.ok) {
				throw new Error("Something went wrong while downloading the PDF");
			}
			const blob = await response.blob();

			// creates a URL for the blob and creates a link element to download the file
			const downloadUrl = window.URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = downloadUrl;
			link.setAttribute("download", `Stubecki_Quentin_Resume_${lang}.pdf`);
			document.body.appendChild(link);
			link.click(); // triggers the download
			if (link.parentNode) {
				link.parentNode.removeChild(link);
			}
			URL.revokeObjectURL(downloadUrl); // Clean up
			console.log("Downloaded the PDF");
		} catch (error) {
			console.error("Error downloading the PDF: ", error);
		}
	};

	return (
		<div
			className={
				"flex flex-col justify-center items-center h-full group/buttons"
			}
		>
			<div
				className={
					"flex h-full w-full justify-center items-center p-5 group-hover/buttons:hidden"
				}
			>
				<FaLink className="lg:text-[56px] text-[36px] mr-4" />
				<div className={"text-3xl font-bold"}>Resume</div>
			</div>
			<div className={"hidden group-hover/buttons:flex flex-col"}>
				<div
					className={
						"flex text-2xl font-bold justify-center items-center w-full"
					}
				>
					Download my resume in:
				</div>
				<div className={"flex flex-row justify-center items-center"}>
					<button
						type="button"
						className={
							"dark:bg-Color-950 bg-Color-200 text-xl font-bold px-4 py-2 rounded-lg m-2"
						}
						onClick={() => handleClick("English")}
					>
						English
					</button>
					<button
						type="button"
						className={
							"dark:bg-Color-950 bg-Color-200 text-xl font-bold px-4 py-2 rounded-lg m-2"
						}
						onClick={() => handleClick("French")}
					>
						French
					</button>
				</div>
			</div>
		</div>
	);
}
