import * as pdfjs from "pdfjs-dist";
import * as pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs';
pdfjs.GlobalWorkerOptions.workerSrc = import.meta.url + 'pdfjs-dist/build/pdf.worker.mjs';
import { getBase64 } from "./getBase64";

export async function getPDFcontent(file: File) {
    const pdfBase64: string = await getBase64(file) as string;
    const doc = await pdfjs.getDocument({data: atob(pdfBase64)}).promise;
    const page = await doc.getPage(1);
    return await page.getTextContent();
} 