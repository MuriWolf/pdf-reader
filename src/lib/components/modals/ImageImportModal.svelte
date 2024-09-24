<script lang="ts">
    import { scale, fade } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    import { cubicIn, cubicInOut } from 'svelte/easing';
    export let title: string;
    export let buttonTitle = 'Importar foto';
    const dispatch = createEventDispatcher();
    let profileImgInputFiles: FileList | undefined;
    let previewprofileImgSrc: string;
    let profileImgInputErrorMessage: string | undefined;
  
    function confirm() {
      dispatch('closeModal', {
        delete: true
      });
    }
  
    function cancel() {
      dispatch('closeModal', {
        delete: false
      });
    }
  
    $: if (profileImgInputFiles && profileImgInputFiles.length > 0) {
      profileImgInputErrorMessage = undefined;
      const fileSize = (profileImgInputFiles[0].size / 1024 / 1024).toFixed(4); // MB
      if (parseFloat(fileSize) > 4) {
        profileImgInputFiles = undefined;
        profileImgInputErrorMessage = 'File too big. Max: 4 MB';
      } else {
        previewprofileImgSrc = URL.createObjectURL(profileImgInputFiles[0]);
      }
    }
  </script>
  
  <div
    class="fixed top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 z-50 flex justify-center items-center w-screen h-screen bg-gray-500 bg-opacity-50 backdrop-blur-sm"
    transition:fade={{ duration: 100 }}
  >
    <div
      class="p-4 z-50 bg-c-secondary w-[90vw] h-auto max-w-xl rounded-md modal flex flex-col justify-between gap-y-6"
      transition:scale={{ duration: 125 }}
    >
      <div class="flex justify-between items-center">
        <h2 class="text-c-body-text font-bold">{title}</h2>
        <button class="border-[2px] bg-c-body-text border-c-body-text p-2 rounded-full" on:click={cancel}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M2.25725 0.84375L6.50025 5.08575L10.7423 0.84375L12.1562 2.25775L7.91425 6.49975L12.1562 10.7418L10.7423 12.1558L6.50025 7.91375L2.25725 12.1558L0.843249 10.7418L5.08525 6.49975L0.843249 2.25775L2.25725 0.84375Z"
              fill="#222"
            />
          </svg>
        </button>
      </div>
      <div class="bg-gray-200 w-60 h-60 max-w-full rounded-full mx-auto overflow-hidden">
        <img src={previewprofileImgSrc} class=" h-full" alt="" />
      </div>
      {#if profileImgInputErrorMessage}
        <p class="text-center text-red-400">{profileImgInputErrorMessage}</p>
      {:else}
        <p class="text-center text-c-body-text">Selecione uma imagem da galeria</p>
      {/if}
      <hr class="h-0 border-t-[1px] border-gray-300" />
      <section class="flex gap-4 items-center">
        <button on:click={cancel} class="flex-1 text-c-body-text border-[1px] border-c-body-text py-3 rounded-full"
          >Cancelar</button
        >
  
        {#if profileImgInputFiles}
          <button
            on:click={confirm}
            class="flex-1 bg-c-primary text-gray-50 text-center py-3 px-1 rounded-full"
          >
            Salvar 
          </button>
        {:else}
          <label
            for="profileImg"
            class="flex-1 bg-c-primary text-gray-50 text-center py-3 px-1 rounded-full"
          >
            {buttonTitle}
          </label>
          <input
            type="file"
            id="profileImg"
            name="profileImg"
            accept="image/png, image/jpeg"
            class="hidden"
            bind:files={profileImgInputFiles}
          />
        {/if}
      </section>
    </div>
  </div>