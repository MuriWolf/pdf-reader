export async function getBase64(file: File) {
    return new Promise(( resolve, reject ) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            let encoded = reader.result?.toString().replace("data:application/pdf;base64,", "");
            resolve(encoded);
        };
        reader.onerror = (error) => reject(error);
    })
}