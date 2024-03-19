import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function Form() {
	async function uploadPDF(formData: FormData) {
		"use server";
		const imageFile = formData.get("pdf") as File;
		const blob = await put(imageFile.name, imageFile, {
			access: "public",
		});
		revalidatePath("/");
		return blob;
	}

	return (
		<form action={uploadPDF}>
			<label htmlFor="pdf">pdf</label>
			<input type="file" id="pdf" name="pdf" required />
			<button type="button">Upload</button>
		</form>
	);
}
