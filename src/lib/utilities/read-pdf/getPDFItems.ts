import { getPDFcontent } from "./getPDFcontent";

export async function getPDFItems(file: File) {
    let text = "";
    const content = await getPDFcontent(file);
    content.items.map(item => {
        text = text + "" + item.str;
    })
    return text;
}