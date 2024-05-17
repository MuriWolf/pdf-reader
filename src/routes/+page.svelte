<script lang="ts">
    import Button from "$lib/components/Button.svelte";

    let numero: number = 10;
</script>


<main class="mx-auto p-4">
    <h1 class="max-w-3xl mx-auto text-c-body-text font-bold text-5xl">Enviar</h1>
    <section class="max-w-3xl mx-auto mt-4 bg-c-secondary rounded-2xl p-4">
        <div class="w-full h-[320px] bg-c-secondary-lighter rounded-[10px]" /> <!-- pdf importer -->
        <div class="flex gap-4 mt-4 overflow-x-scroll pb-4 mb-12"> <!-- pdf list -->
            {#each Array(10) as _}
                <div>
                    <div class="w-20 h-16 rounded-[5px] bg-c-secondary-lighter" />
                    <h2 class="text-c-secondary-lighter font-medium mt-2">Pdf name foda</h2>
                </div>
            {/each}
        </div>
        <div class="flex gap-4 justify-end max-xs:flex-col-reverse">
            <Button class="bg-transparent border-2 border-c-body-text">Cancelar</Button>
            <Button class="!px-16">Enviar</Button>
        </div>
    </section>
</main>

<style>
    ::-webkit-scrollbar {
        height: 12px;
        scrollbar-width: thin;
        scrollbar-color: #d1d5db #f3f4f6;
        }

</style>