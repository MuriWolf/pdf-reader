<script>
    import Label from "$lib/components/Label.svelte";
    import { getLocalTimeZone, today } from "@internationalized/date";
    import { RangeCalendar } from "$lib/components/ui/range-calendar/index";
    import MinMaxRange from "$lib/components/ui/MinMaxRange.svelte";
    import Envio from "$lib/components/Envio.svelte";
    
    const start = today(getLocalTimeZone());
    const end = start.add({ days: 7 });
    
    let value = {
        start,
        end
    };

</script>
<main class="mx-auto p-4">
    <h1 class="max-w-3xl mx-auto text-c-body-text font-bold text-5xl ">Envios</h1>
    <section class="max-w-3xl mx-auto mt-4 bg-c-secondary rounded-2xl p-4">
        <h2 class="text-c-body-text font-bold text-2xl">Filtros</h2>
        <form action="" class="flex flex-col items-start gap-4 mt-4">
            <Label titulo={"Título do aquivo"} />
            <div>
                <span class="text-c-body-text mb-1 block">Data</span>
                <RangeCalendar bind:value class="rounded-[5px] border bg-c-body-text" />
            </div>
            <MinMaxRange title={"Valor da multa"} />
        </form>
    </section>

    <section class="flex flex-col gap-4 max-w-3xl mx-auto mt-4 bg-c-secondary rounded-2xl p-4">
        {#each Array(4) as _}
            <Envio />
        {/each}
    </section>
</main>