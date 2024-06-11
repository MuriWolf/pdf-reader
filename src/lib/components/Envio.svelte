<script lang="ts">
	import { slide } from 'svelte/transition';
    import * as AlertDialog from "$lib/components/ui/alert-dialog/index";
    import Button from "$lib/components/ui/button/button.svelte";
    import type { PdfType } from "$lib/types/PdfType";
    import { capitalizeFirstLetter } from "$lib/utilities/capitalizeFirstLetter";
    import { onMount } from 'svelte';
    import type { UserType } from '$lib/types/UserType';

    export let multaDados: PdfType;
    export let userDados: UserType | undefined = undefined;

    let multaEnvioDateFormated: string;
    onMount(() => {
      const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      })
      const multaEnvioDate = new Date(multaDados.data_envio);
      multaEnvioDateFormated = dateFormatter.format(multaEnvioDate);
    })
</script>

{#if multaDados}
  <div class="flex flex-wrap gap-4 bg-c-secondary-light p-4 rounded-[10px]" transition:slide >
      <div class="hidden xs:flex items-center justify-center h-10 w-10 sm:h-20 sm:w-20 bg-c-secondary-lighter rounded-[5px] text-c-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="42" height="42" fill="currentColor" class="w-[75%]"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
      </div>
      <div>
        <h2 class="text-2xl text-c-body-text font-semibold mb-2">{multaDados.placa_veiculo}</h2>
        {#if userDados}
          <p class="text-c-body-text"><strong class="font-semibold">Enviado por: </strong><a class="hover:text-c-primary hover:brightness-150 hover:underline transition-all duration-100" href={`/perfil/${userDados.username}`}>{userDados.nome_user}</a></p>
        {/if}
        <p class="text-c-body-text"><strong class="font-semibold">Enviado em: </strong> <time datetime={multaEnvioDateFormated}>{multaEnvioDateFormated}</time></p>
      </div>
      <div class="flex flex-col justify-end items-end gap-4 ml-auto w-1/4 min-w-[150px]">
          <AlertDialog.Root preventScroll={false} closeOnOutsideClick={true} >
              <AlertDialog.Trigger asChild let:builder>
                <Button builders={[builder]} variant="outline" class="bg-c-primary text-c-body-text hover:text-c-body-text hover:bg-c-primary border-none font-semibold rounded-[5px] hover:bg-c-primary/80 w-full transition-all ease-in shadow-sm hover:shadow-transparent duration-75 active:scale-95">Ver mais</Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content class="p-0 min-[670px]:rounded-2xl rounded-none border-none !overflow-auto max-h-[90vh]">
                <AlertDialog.Header class="bg-c-primary p-4 min-[670px]:rounded-t-2xl">
                  <AlertDialog.Title class="text-c-body-text text-3xl font-bold">{multaDados.placa_veiculo}</AlertDialog.Title>
                  <AlertDialog.Description>
                    {#if userDados}
                      <h3 class="text-c-body-text text-lg">
                        <strong>Enviador por: </strong><a href={`/perfil/${userDados.username}`}>{userDados.nome_user}</a> 
                      </h3>
                    {/if}
                    <h3 class="text-c-body-text text-lg">
                      <strong>Enviado em: </strong> <time datetime={multaEnvioDateFormated}>{multaEnvioDateFormated}</time>
                    </h3>
                  </AlertDialog.Description>
                </AlertDialog.Header>
                <div class="p-4 text-c-body-text/90 ">
                  <h2 class="text-2xl font-semibold mb-2">Dados</h2>
                  <ul class="text-lg flex flex-col gap-2">
                    {#each Object.entries(multaDados) as [key, dado]}
                      {#if key != "id_user" && key != "titulo_pdf" && key != "data_envio"} <!-- data to now shown -->
                        <li class="text-c-body-text/80"><strong class="text-c-body-text/95 font-semibold">{capitalizeFirstLetter(key.replace("_", " "))}: </strong>{dado}</li>
                      {/if}
                    {/each}
                  </ul>
                </div>
                <AlertDialog.Footer class="max-w-full">
                  <AlertDialog.Action class="btn-4 m-4 rounded-[5px] font-medium bg-c-primary hover:bg-c-primary/80 max-w-full sm:w-full transition-all ease-in shadow-sm hover:shadow-transparent duration-75 active:scale-95">Voltar</AlertDialog.Action>
                </AlertDialog.Footer>
              </AlertDialog.Content>
          </AlertDialog.Root>
      </div>
  </div>
{/if}
