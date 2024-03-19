import { PutBlobResult } from "@vercel/blob";
import { useRef, useState } from "react";

export default function UploadResume() {
	const inputFileRef = useRef<HTMLInputElement>(null);
	const [blob, setBlob] = useState<PutBlobResult | null>(null);
	return (
		<div className="flex flex-col w-1/2 text-Color-100 bg-Color-800">
			<h1>Upload the resume</h1>

			<form
				onSubmit={async (event) => {
					event.preventDefault();

					if (!inputFileRef.current?.files) {
						throw new Error("No file selected");
					}

					const file = inputFileRef.current.files[0];

					const response = await fetch(
						`/api/resume/upload?filename=${file.name}`,
						{
							method: "POST",
							body: file,
						},
					);

					const newBlob = (await response.json()) as PutBlobResult;

					setBlob(newBlob);
				}}
			>
				<input name="file" ref={inputFileRef} type="file" required />
				<button type="submit">Upload</button>
			</form>
			{blob && (
				<div>
					Blob url: <a href={blob.url}>{blob.url}</a>
				</div>
			)}
		</div>
	);
}
