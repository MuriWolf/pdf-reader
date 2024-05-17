<script lang="ts">
    import * as AlertDialog from "$lib/components/ui/alert-dialog/index";
    import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="flex bg-c-secondary-light p-4 rounded-[10px]">
    <div class="h-20 w-32 bg-c-secondary-lighter rounded-[5px] mr-4" />
    <h2 class="text-lg text-c-body-text font-semibold">Título do documento pdf</h2>
    <div class="flex flex-col justify-between items-end gap-4 ml-auto">
        <p class="text-c-body-text text-lg"><strong class="font-semibold">Data de envio: </strong> <time datetime="12/02/2024">12/02/2024</time></p>
        <AlertDialog.Root>
            <AlertDialog.Trigger asChild let:builder>
              <Button builders={[builder]} variant="outline" class="bg-c-primary text-c-body-text hover:text-c-body-text hover:bg-c-primary border-none font-semibold rounded-[5px]">Ver mais</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Header>
                <AlertDialog.Title class="text-c-body-text text-3xl font-bold">Titulo do documento pdf</AlertDialog.Title>
                <AlertDialog.Description>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialog.Description>
              </AlertDialog.Header>
              <AlertDialog.Footer>
                <AlertDialog.Action>Voltar</AlertDialog.Action>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog.Root>
        <!-- <Button class="px-12">Ver mais</Button> -->
    </div>
</div>