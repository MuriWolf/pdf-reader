<script lang="ts">
	import { slide } from 'svelte/transition';
    import * as Menubar from "$lib/components/ui/menubar";
    import { onMount } from 'svelte';
    import type { UserType } from '$lib/types/UserType';
    import { EllipsisVertical } from 'lucide-svelte';

    export let user: UserType | undefined = undefined;

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
        <img src={user.foto} alt="Sem foto" class="hidden xs:flex items-center justify-center h-10 w-10 sm:h-20 sm:w-20 bg-c-secondary-lighter rounded-[5px] text-c-secondary">
        <div>
            <h2 class="text-2xl text-c-body-text font-semibold ">{user.nome_user}</h2>
            <p class="text-c-body-text/80 uppercase text-sm">{user.role}</p>
        </div>
        <div class="flex flex-col justify-end items-end gap-4 ml-auto w-1/4 min-w-[150px]">
            <Menubar.Root>
                <Menubar.Menu>
                    <Menubar.Trigger class="!rounded-full !cursor-pointer">
                        <EllipsisVertical />
                    </Menubar.Trigger>
                    <Menubar.Content>
                        <Menubar.Item >
                            <a href={`perfil/${user.username}`}>Ver perfil</a>
                        </Menubar.Item>
                        {#if user.role == "admin"}
                            <Menubar.Separator />
                            <Menubar.Item>
                                <a href={`perfil/${user.username}`}>Editar perfil</a>
                            </Menubar.Item>
                            <Menubar.Separator />
                            <Menubar.Item class="bg-red-400 hover:!bg-red-500 !text-c-body-text">
                                <button >
                                    Apagar perfil
                                </button>
                            </Menubar.Item>
                        {/if}
                    </Menubar.Content>
                </Menubar.Menu>
            </Menubar.Root>
            <a href={`/perfil/${user.username}`} class="bg-c-primary text-c-body-text hover:text-c-body-text hover:bg-c-primary border-none font-semibold rounded-full hover:bg-c-primary/80 w-full transition-all text-center py-2 ease-in shadow-sm hover:shadow-transparent duration-75 active:scale-95">Ver perfil</a>
        </div>
  </div>
{/if}
