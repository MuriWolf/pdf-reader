<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import * as Menubar from "$lib/components/ui/menubar";
    export let currentUser: { username: string, role: "admin" | "user" };
</script>

<div class="mt-4 mb-8">
    <header class="bg-c-primary p-4 rounded-2xl flex items-center justify-between max-w-3xl mx-auto shadow-sm shadow-black">
        <nav>
            <ul class="flex gap-4 text-c-body-text font-medium text-lg">
                <li><a href="/" class="hover:text-c-body-text/80 transition-all duration-100">Enviar</a></li>
                <li><a href="/envios" class="hover:text-c-body-text/80 transition-all duration-100">Envios</a></li>
                <li><a href="/usuarios" class="hover:text-c-body-text/80 transition-all duration-100">Usuários</a></li>
                {#if currentUser.role == "admin"}
                <li><a href="/signup" class="hover:text-c-body-text/80 transition-all duration-100">Add usuário</a></li>
                {/if}
            </ul>
        </nav>
        {#if currentUser.username}
            <Menubar.Root>
                <Menubar.Menu>
                    <Menubar.Trigger class="!rounded-full !cursor-pointer">
                        {#if currentUser.role == "admin"}
                            <span class="uppercase text-c-body-text font-bold text-xs mr-1">ADMIN</span>
                        {/if}
                        <button >
                            <div class="w-10 h-10 bg-c-body-text rounded-full flex items-center justify-center font-bold">P</div>
                        </button>
                    </Menubar.Trigger>
                    <Menubar.Content>
                        <Menubar.Item >
                            <a href={`/perfil/${currentUser.username}`}>
                                <div class=" bg-c-body-text rounded-full flex items-center justify-center font-bold">Ver perfil</div>
                            </a>
                        </Menubar.Item>
                        <Menubar.Item>
                            <a href="/signout" data-sveltekit-reload>
                                <div class="">Sair da conta</div>
                            </a>
                        </Menubar.Item>
                    </Menubar.Content>
                </Menubar.Menu>
            </Menubar.Root>
            
        {:else}
            <Button class="!bg-c-body-text !text-c-secondary-dark">login</Button>
        {/if}
    </header>
</div>