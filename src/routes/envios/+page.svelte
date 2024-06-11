<script lang="ts">
	import type { UserType } from '$lib/types/UserType.ts';
    import { onMount } from 'svelte'
	import Button from '$lib/components/Button.svelte';
	import type { PdfType } from '$lib/types/PdfType.ts';
	import { clickOutside } from '$lib/utilities/events/clickOutside';
	import { slide, scale } from 'svelte/transition';
    import Label from "$lib/components/Label.svelte";
    import { getLocalTimeZone, today, type DateValue } from "@internationalized/date";
    import { RangeCalendar } from "$lib/components/ui/range-calendar/index";
    import MinMaxRange from "$lib/components/ui/MinMaxRange.svelte";
    import Envio from "$lib/components/Envio.svelte";
    import * as Select from "$lib/components/ui/select";

    interface filtersType {
        titulo: string,
        natureza_infracao: { value: string | number | undefined },
        tipo_infracao: { value: string | number | undefined },
        date_infracao: {
            start: DateValue | undefined,
            end: DateValue | undefined
        }
    }
    
    export let data: { posts: Array<PdfType>, users: Array<UserType> }
    const end = today(getLocalTimeZone());
    const start = end.subtract({ months: 3 })
    let filteredPdfs: Array<PdfType>;  
    let showRangeCalendar = false;
    let toggleRangeCalendarElement: HTMLElement;
    let rangeInputContainerElement: HTMLElement;
    let filters: filtersType = {
        titulo: "",
        natureza_infracao: { value: undefined },
        tipo_infracao: { value: undefined },
        date_infracao: {
            start: undefined,
            end: undefined
        }
    }

    onMount(() => {
        if (data) {
            filteredPdfs = data.posts;
        }
    })

    function findPDFAuthor(id: number) {
        if (data.users.length > 0) {
            return data.users.find((user) => user.id_user == id);
        }
    }
        
    function handleClickOutside(event: any) {
        showRangeCalendar = !showRangeCalendar;
        // clickedOutside = true;
    }

    function toggleShowRangeCalendar(event: any) {
        showRangeCalendar = !showRangeCalendar;
    }

    function clearFilters() {
        filters = {
            titulo: "",
            natureza_infracao: { value: undefined },
            tipo_infracao: { value: undefined },
            date_infracao: {
                start: undefined,
                end: undefined
            }
        }
        filterPdfs();
    }

    function filterPdfs() {
        filters = filters;
        if (data.posts.length > 0) {
            filteredPdfs = data.posts.filter((post) => {
                if (!(post.natureza.toLowerCase() == filters.natureza_infracao.value || filters.natureza_infracao.value == undefined)) return undefined;
                if (!(post.infracao.toUpperCase() == filters.tipo_infracao.value || filters.tipo_infracao.value == undefined)) return undefined;
                if (!(post.placa_veiculo.toLowerCase().includes(filters.titulo.toLowerCase()) || filters.titulo == "")) return undefined;
    
                if (filters.date_infracao.start && filters.date_infracao.end) {
                    const filtersDateStart = new Date(`${filters.date_infracao.start.month}/${filters.date_infracao.start.day}/${filters.date_infracao.start.year}`);
                    const filtersDateEnd = new Date(`${filters.date_infracao.end.month}/${filters.date_infracao.end.day}/${filters.date_infracao.end.year}`);
                    const postDate = new Date(post.data_infracao);
                    postDate.setHours(0, 0, 0);            
        
                    if (!
                        (
                            (postDate.getTime() == filtersDateStart.getTime() || postDate.getTime() > filtersDateStart.getTime())
                                &&
                            (postDate.getTime() == filtersDateEnd.getTime() || postDate.getTime() < filtersDateEnd.getTime())
                        )
                    ) return undefined;
                }
                return post;
            })
        }
    }
</script>

<main class="mx-auto p-4">
    <h1 class="max-w-3xl mx-auto text-c-body-text font-bold text-5xl ">Envios</h1>
    <section class="max-w-3xl mx-auto mt-4 bg-c-secondary rounded-2xl p-4">
        <h2 class="text-c-body-text font-bold text-2xl">Filtros</h2>
        <form action="" class="flex flex-col items-start gap-8 mt-4 w-full">
            <div class="grid sm:grid-cols-2 w-full gap-8">
                <Label titulo={"Título do aquivo"} bind:value={filters.titulo} placeholder={"Informe a placa do carro"} />
                <div class="w-full">
                    <span class="text-c-body-text mb-1 block">Data da infração</span>
                    <button class="bg-c-body-text h-10 w-full rounded-[5px] px-3 py-2" on:click={toggleShowRangeCalendar} bind:this={toggleRangeCalendarElement}>
                        {#if filters.date_infracao.start && filters.date_infracao.end}
                            {filters.date_infracao.start.day}/{filters.date_infracao.start.month} até {filters.date_infracao.end.day}/{filters.date_infracao.end.month}
                        {:else}
                            Selecione a data
                        {/if}
                    </button>
                    {#if showRangeCalendar}
                        <div class="absolute z-10" use:clickOutside on:click_outside={handleClickOutside} transition:scale={{ duration: 100 }} bind:this={rangeInputContainerElement}>
                            <RangeCalendar maxValue={end} bind:value={filters.date_infracao} class="rounded-[5px] border bg-c-body-text  mt-4" />
                        </div>
                    {/if}
                </div>
                <Label titulo={"natureza da infração"}>
                    <Select.Root 
                        preventScroll={false}
                        onSelectedChange={(v) => {
                            v && (filters.natureza_infracao = v);
                            filters = filters;
                        }}
                        selected={filters.natureza_infracao}
                        
                      >
                        <Select.Trigger class="w-full !ring-c-primary !ring-offset-0 rounded-[5px] bg-c-body-text" > 
                            <Select.Value placeholder="Selecione" />
                        </Select.Trigger>
                        <Select.Content>
                            <Select.Item value="leve">Leve</Select.Item>
                            <Select.Item value="media">Media</Select.Item>
                            <Select.Item value="grave">Grave</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Label>
                
                <Label titulo={"Tipo de infração"}> 
                    <Select.Root
                        preventScroll={false}
                        onSelectedChange={(v) => {
                            v && (filters.tipo_infracao = v);
                            filters = filters;
                        }}
                        selected={filters.tipo_infracao}
                      >
                        <Select.Trigger class="w-full !ring-c-primary !ring-offset-0 rounded-[5px] bg-c-body-text">
                            <Select.Value placeholder="Selecione" />
                        </Select.Trigger>
                        <Select.Content>
                            <Select.Item value="TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE 20%">Excesso de velocidade</Select.Item>
                        </Select.Content>
                    </Select.Root>
                </Label>
            </div>

            <div class="flex gap-4 justify-end w-1/2 ml-auto">
                <Button class="text-c-body-text bg-red-400 hover:text-c-body-text hover:bg-red-400/90 transition-all !py-2" on:click={clearFilters}>Limpar filtros</Button>
                <Button class="bg-transparent border-2 hover:bg-white/40 !py-2" on:click={filterPdfs}>Filtrar</Button>
            </div>
        </form>
    </section>

    <section class="flex flex-col gap-4 max-w-3xl mx-auto mt-4 bg-c-secondary rounded-2xl p-4 min-h-[300px]">
        {#if data}
            {#if filteredPdfs}
                {#if filteredPdfs.length > 0}
                    {#each filteredPdfs as post}
                        <Envio multaDados={post} userDados={findPDFAuthor(post.user_id)} />    
                    {/each}
                {:else}
                    <p class="text-lg text-c-body-text text-center">Nenhuma multa encontrada. Tente outros filtros!</p>
                {/if}
            {/if}
        {:else}
            <p class="text-lg text-c-body-text text-center">Nenhuma multa foi encontrada :(</p>
        {/if}
    </section>
</main>