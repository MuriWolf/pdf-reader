<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Label from "$lib/components/Label.svelte";
    import PerfilPreview from "$lib/components/PerfilPreview.svelte";
    import type { UserType } from "$lib/types/UserType";

    let searchUserValue: string | undefined;
    const USER_FALSO: UserType = {
        nome_user: "Pedodo",
        username: "pasdpasssss",
        email: "asdasdas@fmail.com",
        id_user: 1,
        role: 'admin'         
    }

</script>

<main class="flex flex-col items-start gap-6 mx-auto p-4">
    <hgroup class="max-w-3xl w-full mx-auto">
        <h1 class="text-c-body-text font-bold text-5xl mt-12 text-left ">Usuários</h1>
    </hgroup>
    <section class="flex gap-4 items-end max-w-3xl w-full mx-auto">
        <Label titulo="Digite para buscar um usuário" placeholder="digite um nome, username..." bind:value={searchUserValue}>

        </Label>
        <div class="flex gap-4 justify-end w-1/2 ml-auto">
            <Button class="text-c-body-text bg-red-400 hover:text-c-body-text hover:bg-red-400/90 transition-all !py-2" on:click={() => searchUserValue = undefined}>Limpar</Button>
            <Button class="bg-transparent border-2 hover:bg-white/40 !py-2" on:click={() => {}}>Filtrar</Button>
        </div>
    </section>
    <section class="flex flex-col gap-4 max-w-3xl w-full mx-auto bg-c-secondary rounded-2xl p-4 min-h-[300px]">
        <PerfilPreview user={USER_FALSO} />
    </section>
</main>