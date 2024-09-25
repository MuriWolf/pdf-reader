<script lang="ts">
	import { slide } from 'svelte/transition';
    import * as Menubar from "$lib/components/ui/menubar";
    import { onMount } from 'svelte';
    import type { UserType } from '$lib/types/UserType';
    import { EllipsisVertical } from 'lucide-svelte';
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let user: UserType | undefined = undefined;
    export let isCurrentUserAdmin: boolean = false;

    function handleDeleteUser() {
        dispatch('delete', {
            userId: user?.id
        })
    }

    let multaEnvioDateFormated: string;
    onMount(() => {
      const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      })
    })
</script>

{#if user}
    <div class="flex flex-wrap gap-4 bg-c-secondary-light p-4 rounded-[10px]" transition:slide >
        <img src={user.foto} alt="Sem foto" class="hidden xs:flex items-center justify-center h-10 w-10 sm:h-24 sm:w-24 bg-c-secondary-lighter rounded-[5px] text-c-secondary">
        <div>
            <h2 class="text-xl md:text-2xl text-c-body-text font-semibold break-all">{user.nome_user}</h2>
            <p class="text-c-body-text/80 uppercase text-sm">{user.role}</p>
        </div>
        <div class="flex flex-col justify-end items-end gap-4 ml-auto w-1/5 min-w-[150px]">
            {#if isCurrentUserAdmin}
                <Menubar.Root>
                    <Menubar.Menu>
                        <Menubar.Trigger class="!rounded-full !cursor-pointer bg-c-body-text p-1">
                            <EllipsisVertical />
                        </Menubar.Trigger>
                        <Menubar.Content>
                            <Menubar.Item>
                                <a href={`perfil/${user.username}/editar`}>Editar perfil</a>
                            </Menubar.Item>
                            <Menubar.Separator />
                            <Menubar.Item class="bg-red-400 hover:!bg-red-500 !text-c-body-text" on:click={handleDeleteUser}>
                                Apagar perfil
                            </Menubar.Item>
                        </Menubar.Content>
                    </Menubar.Menu>
                </Menubar.Root>
            {/if}
            <a href={`/perfil/${user.username}`} class="bg-c-primary text-c-body-text hover:text-c-body-text hover:bg-c-primary border-none font-semibold rounded-full hover:bg-c-primary/80 w-full transition-all text-center py-2 ease-in shadow-sm hover:shadow-transparent duration-75 active:scale-95">Ver perfil</a>
        </div>
  </div>
{/if}
