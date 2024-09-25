<script lang="ts">
    import { enhance } from "$app/forms";
    import Button from "$lib/components/Button.svelte";
    import Label from "$lib/components/Label.svelte";
    import PerfilPreview from "$lib/components/PerfilPreview.svelte";
    import type { UserType } from "$lib/types/UserType";

    export let data: { users: Array<UserType> | [], currentUser: UserType | undefined };

    let formDelete: HTMLFormElement;
    let userIdUserToDeleteInput: HTMLInputElement;
    let filteredUsers: Array<UserType> | undefined;

    if (data.users) {
        filteredUsers = data.users;
    }
    let searchUserValue: string = "";

    $: filterUser(searchUserValue, data.users, data.currentUser);

    async function handleDeleteUser(e: { detail: { userId: any; }; }, inputValueIdHandler: HTMLInputElement) {
        inputValueIdHandler.value = await e.detail.userId;
        formDelete.submit();
    }

    function filterUser(searchedValue: string, usersToFilter: Array<UserType>, currentUser: UserType | undefined) {
        searchedValue = searchedValue?.toLocaleLowerCase();
        filteredUsers = usersToFilter.filter((user) => {
            if (
                user.email.toLowerCase().includes(searchedValue) ||
                user.nome_user.toLowerCase().includes(searchedValue) ||
                user.username.toLowerCase().includes(searchedValue)
            ) { 
                if (user.id !== currentUser?.id) {
                    return user;
                }
            }
        })
    }
</script>

<main class="flex flex-col items-start gap-6 mx-auto p-4">
    <hgroup class="max-w-3xl w-full mx-auto">
        <h1 class="text-c-body-text font-bold text-5xl text-left ">Usuários</h1>
    </hgroup>
    <section class="flex gap-4 items-end max-w-3xl w-full mx-auto">
        <Label titulo="Digite para buscar um usuário" placeholder="digite um nome, username..." bind:value={searchUserValue}>

        </Label>
        <div class="flex gap-4 justify-end  ml-auto">
            <Button class="text-c-body-text bg-red-400 hover:text-c-body-text hover:bg-red-400/90 transition-all !py-2" on:click={() => searchUserValue = ""}>Limpar</Button>
        </div>
    </section>
    <section class="flex flex-col gap-4 max-w-3xl w-full mx-auto bg-c-secondary rounded-2xl p-4 min-h-[300px]">
        <form action="?/delete" method="post" use:enhance bind:this={formDelete}>
            <input type="hidden" name="idUserToDelete" bind:this={userIdUserToDeleteInput}>
        </form>
        {#if data?.users && data?.currentUser && filteredUsers}
            {#if filteredUsers.length > 0}
                {#each filteredUsers as user}
                    <PerfilPreview user={user} isCurrentUserAdmin={data.currentUser.role === "admin"} on:delete={(e) => handleDeleteUser(e, userIdUserToDeleteInput)} />
                {/each}
            {:else}
                <p class="text-c-body-text">Nenhum perfil encontrado. Tente outros filtros.</p>
            {/if}
        {:else}
            <p class="text-c-body-text">Nenhum perfil encontrado. </p>
        {/if}
    </section>
</main>