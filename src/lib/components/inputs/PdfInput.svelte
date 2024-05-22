<script lang="ts">
    let inputFiles: FileList | undefined;
    export let selectedFiles: Array<File> = [];
    let imgInputErrorMessage: string | undefined;

    $: if (inputFiles && inputFiles.length > 0) {
		imgInputErrorMessage = undefined;
        let fileSize: number;
        for (let i = 0; i < inputFiles!.length; i++) {
            const file = inputFiles![i];
            
            fileSize = parseFloat((file.size / 1024 / 1024).toFixed(4)); // MB
            if (fileSize > 20) {
                inputFiles = undefined;
                imgInputErrorMessage = 'Arquivo muito grande. Max: 20 MB';
		    }
            console.log();
            
            for (let j = 0; j < selectedFiles.length; j++) {
                const selectedFile = selectedFiles[j];
                console.log("ingual");
                if (file.name == selectedFile.name) {
                    
                    inputFiles = undefined;
                    imgInputErrorMessage = 'Arquivo já existe.';
                    break;
                }
            }

            if (imgInputErrorMessage != undefined) {
                break;
            }
        }


        if (imgInputErrorMessage == undefined) {
            for (let i = 0; i < inputFiles!.length; i++)  {
                selectedFiles.push(inputFiles![i]);  
            }
        }
            selectedFiles = selectedFiles; 
            inputFiles = undefined;
        }

    </script>

{#if imgInputErrorMessage}
    <p class="text-red-400 text-sm font-medium">{imgInputErrorMessage}</p>
{/if}

<label for="profileImg" class="w-full max-w-full flex justify-center items-center  mx-auto overflow-hidden h-[320px] bg-c-secondary-lighter rounded-[10px] cursor-pointer {imgInputErrorMessage != undefined ? 'border-red-400 bg-red-200' : 'border-gray-300 bg-borders'}">
    <input
        type="file"
        id="profileImg"
        name="profileImg"
        accept="application/pdf,application/vnd.ms-excel"
        class="hidden"
        multiple
        bind:files={inputFiles}
    />
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M11 16.375V8.225L8.4 10.825L7 9.375L12 4.375L17 9.375L15.6 10.825L13 8.225V16.375H11ZM6 20.375C5.45 20.375 4.979 20.179 4.587 19.787C4.195 19.395 3.99934 18.9243 4 18.375V15.375H6V18.375H18V15.375H20V18.375C20 18.925 19.804 19.396 19.412 19.788C19.02 20.18 18.5493 20.3757 18 20.375H6Z" fill="black"/>
    </svg>
</label>

<!-- <div class="max-w-full grid grid-cols-3 gap-2 mt-2 items-start ">
    {#if selectedFiles}
        {#each selectedFiles as file}
            <p>ldapdas</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/></svg>
            <!-- <img src={URL.createObjectURL(file)} class="rounded-md h-[100px]" alt="" /> -->
        <!-- {/each}
    {/if}
</div> --> 