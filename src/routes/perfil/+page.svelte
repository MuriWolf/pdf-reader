<script lang="ts">
    import Envio from "$lib/components/Envio.svelte";


</script>

<h1 class="max-w-3xl mx-auto text-c-body-text font-bold text-5xl ">Perfil</h1>
<section class="max-w-3xl mx-auto mt-4 bg-c-secondary rounded-2xl">
    <div class="flex gap-4 bg-c-primary rounded-2xl p-4 h-32 mb-4 shadow-sm text-c-body-text text-lg">
        <div class="h-24 w-24 rounded-[10px] bg-white" />
        <div>
            <h2><strong class="font-semibold">Nome: </strong>João Luís Neto Rocha</h2>
            <h2><strong class="font-semibold">Email/ID: </strong>joaoluis@gmail.com</h2>
            <h2><strong class="font-semibold">Total de Envios: 3</strong></h2>
        </div>
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