<script lang="ts">
    import Button from "$lib/components/Button.svelte";

    let userLogged = true;
    let username = "HermannHesse";
</script>

<div class="mt-4 mb-8">
    <header class="bg-c-primary p-4 rounded-2xl flex items-center justify-between max-w-3xl mx-auto shadow-sm shadow-black border-2 border-c-body-text/75">
        <nav>
            <ul class="flex gap-4 text-c-body-text font-medium text-lg">
                <li><a href="/" class="hover:text-c-body-text/80 transition-all duration-100">Enviar</a></li>
                <li><a href="/envios" class="hover:text-c-body-text/80 transition-all duration-100">Envios</a></li>
                <!-- <li><a href=""></a></li> -->
            </ul>
        </nav>
        {#if userLogged}
            <a href={`/perfil/${username}`}>
                <div class="w-10 h-10 bg-c-body-text rounded-full flex items-center justify-center font-bold">P</div>
            </a>
        {:else}
            <Button class="!bg-c-body-text !text-c-secondary-dark">login</Button>
        {/if}
    </header>
</div>