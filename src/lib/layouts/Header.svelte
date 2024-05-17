<script lang="ts">
    import Button from "$lib/components/Button.svelte";

    let userLogged = true;
</script>

<div class="bg-c-primary p-4 mb-8">
    <header class="flex items-center justify-between max-w-3xl mx-auto">
        <nav>
            <ul class="flex gap-4 text-c-body-text font-medium text-lg">
                <li><a href="/">Enviar</a></li>
                <li><a href="/envios">Envios</a></li>
                <li><a href=""></a></li>
            </ul>
        </nav>
        {#if userLogged}
            <a href="/perfil">
                <div class="w-10 h-10 bg-c-body-text rounded-full flex items-center justify-center font-bold">P</div>
            </a>
        {:else}
            <Button class="!bg-c-body-text !text-c-secondary-dark">login</Button>
        {/if}
    </header>
</div>