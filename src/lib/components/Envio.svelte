<script lang="ts">
    import * as AlertDialog from "$lib/components/ui/alert-dialog/index";
    import Button from "$lib/components/ui/button/button.svelte";
    import type { PdfType } from "$lib/types/PdfType";
    import { capitalizeFirstLetter } from "$lib/utilities/capitalizeFirstLetter";

    export let multaDados: PdfType;
</script>

{#if multaDados}
  <div class="flex bg-c-secondary-light p-4 rounded-[10px]">
      <div class="h-20 w-32 bg-c-secondary-lighter rounded-[5px] mr-4" />
      <h2 class="text-lg text-c-body-text font-semibold">Título do documento pdf</h2>
      <div class="flex flex-col justify-between items-end gap-4 ml-auto">
          <p class="text-c-body-text text-lg"><strong class="font-semibold">Data de envio: </strong> <time datetime="12/02/2024">12/02/2024</time></p>
          <AlertDialog.Root>
              <AlertDialog.Trigger asChild let:builder>
                <Button builders={[builder]} variant="outline" class="bg-c-primary text-c-body-text hover:text-c-body-text hover:bg-c-primary border-none font-semibold rounded-[5px] hover:bg-c-primary/80 w-full transition-all ease-in shadow-sm hover:shadow-transparent duration-75 active:scale-95">Ver mais</Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content class="p-0 min-[670px]:rounded-2xl rounded-none border-none !overflow-auto">
                <AlertDialog.Header class="bg-c-primary p-4 min-[670px]:rounded-2xl">
                  <AlertDialog.Title class="text-c-body-text text-3xl font-bold">Titulo do documento pdf</AlertDialog.Title>
                  <AlertDialog.Description>
                    <h3 class="text-c-body-text text-lg">
                      <time datetime="14/02/2002"><strong>14/02/2002</strong></time>
                    </h3>
                    <h3 class="text-c-body-text text-lg">
                      <strong>Enviador por: </strong>Murillo do Grau
                    </h3>
                  </AlertDialog.Description>
                </AlertDialog.Header>
                <div class="p-4 text-c-body-text/90 ">
                  <h2 class="text-2xl font-semibold mb-2">Dados</h2>
                  <ul class="text-lg flex flex-col gap-2">
                    {#each Object.entries(multaDados) as [key, dado]}
                      {#if key != "id_user"} <!-- data to now shown -->
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

<style>
  .btn-4 {
  border: 1px solid;
  overflow: hidden;
  position: relative;
}
.btn-4 span {
  z-index: 20;
}
.btn-4:after {
  background: #fff;
  content: "";
  height: 155px;
  left: -75px;
  opacity: 0.2;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 50px;
  z-index: -10;
}

.btn-4:hover:after {
  left: 120%;
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}
</style>