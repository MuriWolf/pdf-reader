<script lang="ts">
	import { clickOutside } from '$lib/utilities/events/clickOutside';
	import { slide, scale } from 'svelte/transition';
    import Label from "$lib/components/Label.svelte";
    import { getLocalTimeZone, today } from "@internationalized/date";
    import { RangeCalendar } from "$lib/components/ui/range-calendar/index";
    import MinMaxRange from "$lib/components/ui/MinMaxRange.svelte";
    import Envio from "$lib/components/Envio.svelte";
    
    const end = today(getLocalTimeZone());
    const start = end.subtract({ months: 3 })
    let showRangeCalendar = false;
    let clickedOutside = false; // não consegui arrumar um jeito mais inteligente
    let toggleRangeCalendarElement: HTMLElement;
    let rangeInputContainerElement: HTMLElement;
    
    let value = {
        start,
        end
    };

    function handleClickOutside(event: any) {
        // if (!(event.target == rangeInputContainerElement) && event.target == toggleRangeCalendarElement) {
        //     return;
        // }
        showRangeCalendar = !showRangeCalendar;
        // clickedOutside = true;
    }

    function toggleShowRangeCalendar(event: any) {
        showRangeCalendar = !showRangeCalendar;
        // if (!clickedOutside) {
        // }
        // clickedOutside = false;
    }
</script>

<main class="mx-auto p-4">
    <h1 class="max-w-3xl mx-auto text-c-body-text font-bold text-5xl ">Envios</h1>
    <section class="max-w-3xl mx-auto mt-4 bg-c-secondary rounded-2xl p-4">
        <h2 class="text-c-body-text font-bold text-2xl">Filtros</h2>
        <form action="" class="flex flex-col items-start gap-8 mt-4 w-full">
            <div class="flex justify-between w-full gap-8">
                <Label titulo={"Título do aquivo"} />
                <div class="w-full">
                    <span class="text-c-body-text mb-1 block">Data</span>
                    <button class="bg-c-body-text h-10 w-full rounded-[5px] px-3 py-2" on:click={toggleShowRangeCalendar} bind:this={toggleRangeCalendarElement}>
                        {#if value.start && value.end}
                            {value.start.day}/{value.start.month} até {value.end.day}/{value.end.month}
                        {:else}
                            Selecione a data
                        {/if}
                    </button>
                    {#if showRangeCalendar}
                        <div class="absolute z-10" use:clickOutside on:click_outside={handleClickOutside} transition:scale={{ duration: 100 }} bind:this={rangeInputContainerElement}>
                            <RangeCalendar maxValue={end} bind:value class="rounded-[5px] border bg-c-body-text  mt-4" />
                        </div>
                    {/if}
                </div>
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