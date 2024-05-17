<script lang="ts">
    import Envio from "$lib/components/Envio.svelte";


</script>

<h1 class="max-w-3xl mx-auto text-c-body-text font-bold text-5xl ">Perfil</h1>
<section class="max-w-3xl mx-auto mt-4 bg-c-secondary rounded-2xl">
    <div class="bg-c-primary rounded-2xl p-4 h-32 mb-4 shadow-sm">
        <h2>Nome</h2>
    </div>

    <div class="p-4">
        <h2 class="text-c-body-text font-bold text-3xl mb-2">Envios</h2>
        <div class="flex flex-col gap-4">
            {#each Array(3) as _ }
                <Envio />    
            {/each}
        </div>
    </div>
</section>