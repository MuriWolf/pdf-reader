
export function handleFilesInput(inputEl: HTMLInputElement, inputFiles: FileList | undefined, selectedFiles: Array<File>, e?: DragEvent) {
    if (e) {
        inputFiles = e.dataTransfer?.files;
    }

    let errorMessage: string | undefined;
    
    if (inputFiles && inputFiles.length > 0) {
        errorMessage = undefined;
        let fileSize: number;
        for (let i = 0; i < inputFiles!.length; i++) {
            const file = inputFiles![i];

            if (file.type != "application/pdf") {
                errorMessage = 'Formato não permitido. Use apenas PDFs';
                break;
            }
            
            fileSize = parseFloat((file.size / 1024 / 1024).toFixed(4)); // MB
            if (fileSize > 20) {
                inputFiles = undefined;
                errorMessage = 'Arquivo muito grande. Max: 20 MB';
            }
            
            for (let j = 0; j < selectedFiles.length; j++) {
                const selectedFile = selectedFiles[j];
                if (file.name == selectedFile.name) {

                    inputFiles = undefined;
                    errorMessage = 'Arquivo já existe.';
                    break;
                }
            }

            if (errorMessage != undefined) {
                break;
            }
        }

        if (errorMessage == undefined) {
            for (let i = 0; i < inputFiles!.length; i++)  {
                selectedFiles.push(inputFiles![i]);  
            }
        }
            inputEl.value = '';
            selectedFiles = selectedFiles; 
            inputFiles = undefined;
    }

    return {
        inputFiles: inputFiles,
        selectedFiles: selectedFiles,
        inputErrorMessage: errorMessage
    }
}