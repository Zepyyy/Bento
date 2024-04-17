import { FaLink } from "react-icons/fa6";
import React from "react";

export default function LinkCard() {
	const handleClick = async (lang: "English" | "French") => {
		try {
			const resumes = {
				English:
					"https://cyesteemulteeflk.public.blob.vercel-storage.com/Resumes/Stubecki_Quentin_Resume-gTJro52pBIyc6lM9ImtpKFxffxyAOY.pdf",
				French:
					"https://cyesteemulteeflk.public.blob.vercel-storage.com/Resumes/Stubecki_Quentin_CV-BGIs8pLgfG8hyy08mkqP6C941lpIsd.pdf",
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
				"flex flex-col justify-center items-center h-full group/buttons text-md lg:text-xl text-pretty"
			}
		>
			{/* not hovered */}
			<div
				className={
					"flex justify-center items-center h-full w-full p-5 group-hover/buttons:hidden"
				}
			>
				<FaLink className="lg:text-[56px] text-[36px] mr-4" />
				<div className={"font-bold"}>Resume</div>
			</div>

			{/* hovered */}
			<div
				className={
					"hidden justify-center items-center h-full w-full group-hover/buttons:flex flex-col p-5 md:p-0"
				}
			>
				<div
					className={
						"flex flex-col text-center justify-center text-pretty font-bold w-full text-xs md:text-md lg:text-xl"
					}
				>
					Download my resume in:
				</div>
				<div className={"flex flex-row justify-center items-center"}>
					{/* English */}
					<button
						type="button"
						className={
							"dark:bg-Color-950 bg-Color-200 text-xs md:text-md lg:text-xl font-semibold px-2 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg m-2"
						}
						onClick={() => handleClick("English")}
					>
						English
					</button>
					{/* French */}
					<button
						type="button"
						className={
							"dark:bg-Color-950 bg-Color-200 text-xs md:text-md lg:text-xl font-semibold px-2 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg m-2"
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
