<script lang="ts">
    import { dragDrop } from "$lib/utilities/events/dragDrop";
    import { handleFilesInput } from "$lib/utilities/read-pdf/handleFilesInput";
    import type { FileInput } from "lucide-svelte";

    export let selectedFiles: Array<File> = [];
    let inputFiles: FileList | undefined;
    let inputErrorMessage: string | undefined;
    let inputEl: any;
    let hoveringDragDropInput = false;
    
    $: if (inputFiles && inputFiles.length > 0) {
        const response = handleFilesInput(inputEl, inputFiles, selectedFiles);
        ({ inputFiles, selectedFiles, inputErrorMessage } = response);
    }

    const toggleHoveringDragDropInput = (bool: boolean) => hoveringDragDropInput = bool; 
    
    // function handleFilesInput(e?: DragEvent) {
    //     if (e) {
    //         inputFiles = e.dataTransfer?.files;
    //     }
        
    //     if (inputFiles && inputFiles.length > 0) {
    //         inputErrorMessage = undefined;
    //         let fileSize: number;
    //         for (let i = 0; i < inputFiles!.length; i++) {
    //             const file = inputFiles![i];

    //             if (file.type != "application/pdf") {
    //                 inputErrorMessage = 'Formato não permitido. Use apenas PDFs';
    //                 break;
    //             }
                
    //             fileSize = parseFloat((file.size / 1024 / 1024).toFixed(4)); // MB
    //             if (fileSize > 20) {
    //                 inputFiles = undefined;
    //                 inputErrorMessage = 'Arquivo muito grande. Max: 20 MB';
    //             }
                
    //             for (let j = 0; j < selectedFiles.length; j++) {
    //                 const selectedFile = selectedFiles[j];
    //                 if (file.name == selectedFile.name) {

    //                     inputFiles = undefined;
    //                     inputErrorMessage = 'Arquivo já existe.';
    //                     break;
    //                 }
    //             }

    //             if (inputErrorMessage != undefined) {
    //                 break;
    //             }
    //         }

    //         if (inputErrorMessage == undefined) {
    //             for (let i = 0; i < inputFiles!.length; i++)  {
    //                 selectedFiles.push(inputFiles![i]);  
    //             }
    //         }
    //             inputEl.value = '';
    //             selectedFiles = selectedFiles; 
    //             inputFiles = undefined;
    //     }
    // }

    function handleDragDrop(e: DragEvent) {
        toggleHoveringDragDropInput(false);
        const response = handleFilesInput(inputEl, inputFiles, selectedFiles, e);
        ({ inputFiles, selectedFiles, inputErrorMessage } = response);
    }
    </script>

{#if inputErrorMessage}
    <p class="text-red-400 text-sm font-medium">{inputErrorMessage}</p>
{/if}

<label 
    for="profileImg"
    class="w-full max-w-full flex justify-center items-center  mx-auto overflow-hidden h-[320px] bg-c-secondary-lighter rounded-[10px] cursor-pointer transition-all {inputErrorMessage != undefined ? 'border-red-400 bg-red-200' : 'border-gray-300 bg-borders'} {hoveringDragDropInput ? 'bg-slate-400 duration-[2000]' : ''}" use:dragDrop on:drag_drop={handleDragDrop} on:drop={handleDragDrop} on:dragover={() => toggleHoveringDragDropInput(true)} on:dragleave={() => toggleHoveringDragDropInput(false)}
>
    <input
        type="file"
        id="profileImg"
        name="profileImg"
        accept="application/pdf,application/vnd.ms-excel"
        class="hidden"
        multiple
        bind:files={inputFiles}
        bind:this={inputEl}
    />
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 24 25" fill="none" class="mx-auto">
            <path d="M11 16.375V8.225L8.4 10.825L7 9.375L12 4.375L17 9.375L15.6 10.825L13 8.225V16.375H11ZM6 20.375C5.45 20.375 4.979 20.179 4.587 19.787C4.195 19.395 3.99934 18.9243 4 18.375V15.375H6V18.375H18V15.375H20V18.375C20 18.925 19.804 19.396 19.412 19.788C19.02 20.18 18.5493 20.3757 18 20.375H6Z" fill="black"/>
        </svg>
        <p class="mt-2">Clique para selecionar as multas.</p>
    </div>
</label>