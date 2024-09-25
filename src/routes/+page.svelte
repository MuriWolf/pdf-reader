<script lang="ts">
	import PdfInput from '$lib/components/inputs/PdfInput.svelte';
    import Button from "$lib/components/Button.svelte";
    import { scale, slide } from "svelte/transition"
    // import { base64 } from "@sveu/browser"
    import * as pdfjs from "pdfjs-dist";
    import { getPDFItems } from '$lib/utilities/read-pdf/getPDFItems';
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';
    pdfjs.GlobalWorkerOptions.workerSrc = import.meta.url + 'pdfjs-dist/build/pdf.worker.mjs';
    import { toast } from "svelte-sonner";
    import { Toaster } from '$lib/components/ui/sonner';
    import type { UserType } from '$lib/types/UserType';

    export let data: UserType;
    export let form: ActionData;
    
    let selectedFiles: Array<File> = [];
    let selectedFilesContent: Array<any> | string = [];
    let formElement: any;

    $: if (selectedFiles) {
        updatePDFs();
    }

    $: if (form) {
        if (form?.success) {
            const toasterText = "Multas Enviadas com sucesso!"
            const today = new Date()
            today.getDate()
            toast.success(toasterText, {
                description: today.toString()
            })
            selectedFiles = [];
            form = null;
        }
    }
    
    async function updatePDFs() {
        selectedFilesContent = [];
        for (const file of selectedFiles) {
            const text = await getPDFItems(file);
            const today = new Date()
            const todayTime = today.getTime()
            selectedFilesContent.push({ userId: data?.id, dataEnvio: todayTime, text: text })
        }
        selectedFilesContent = JSON.stringify(selectedFilesContent);
        // console.log(selectedFilesContent);
        
    }

    function deleteFile(fileName: string) {
        selectedFiles = selectedFiles.filter((file) => file.name != fileName)
    }

    function handleFormSubmit() {
        if (selectedFiles.length > 0) {
            formElement.requestSubmit();
        }
    }
</script>
<main class="mx-auto p-4">
    <h1 class="max-w-3xl mx-auto text-c-body-text font-bold text-5xl">Enviar</h1>
    <section class="max-w-3xl mx-auto mt-4 bg-c-secondary rounded-2xl p-4">
        <!-- <input type="file" name="upload" accept="application/pdf,application/vnd.ms-excel" class=" /> -->
        <PdfInput bind:selectedFiles />
        <div class="flex gap-4 mt-4 overflow-x-auto pb-4 mb-12"> 
            {#if selectedFiles}
                {#each selectedFiles as file}
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="flex flex-col gap-2 max-w-24" transition:slide={{duration: 100}} >
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div class="relative w-24 h-16 py-2 rounded-[5px] bg-c-secondary-lighter transition-all" on:click={() => deleteFile(file.name)}>
                            <div class="absolute w-full h-full top-0 flex items-center justify-center hover:opacity-100 opacity-0 hover:bg-black/20 cursor-pointer transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="text-c-body-text w-7" fill="currentColor"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-full mx-auto text-c-secondary" fill="currentColor"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                <path d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/>
                            </svg>
                        </div>
                        <!-- <img src={URL.createObjectURL(file)} class="rounded-md h-[100px]" alt="" /> -->
                        <h2 class="text-c-secondary-lighter font-medium mt-2 break-all overflow-ellipsis">{file.name}</h2>
                    </div>  
                {/each}
            {/if}
        </div>
        <form method="POST" use:enhance bind:this={formElement} class="flex gap-4 justify-end max-xs:flex-col-reverse">
            <Button class="text-c-body-text bg-red-400 hover:text-c-body-text hover:bg-red-400/90 transition-all" on:click={() => selectedFiles = []}>Cancelar</Button>
            <Button class="!px-16" on:click={handleFormSubmit}>Enviar</Button>
            <input type="hidden" name="pdf-values" bind:value={selectedFilesContent}>
        </form>
    </section>
</main>

<Toaster />

<style>
    ::-webkit-scrollbar {
        height: 12px;
        scrollbar-width: thin;
        scrollbar-color: #d1d5db00 #6d737f;
    }
</style>