<script lang="ts">
    import Separator from "../ui/separator/separator.svelte";
    import { Slider } from "$lib/components/ui/slider/index";

    export let title = "slider";
    export let min = 100;
    export let max = 800;
    export let step = 1;
    let maxSlider = 1000;

    $: if (min > max || min == max) {
        if (max > 0) {
            min = max -1;
        } else {
            min = 0;
        }
    }

    function handleSliderChange(array: Array<number>) {
        min = array[0];
        max = array[1];
    }
</script>

<div class="w-full">
    <div class="flex justify-between mb-6">
        <p class="text-c-body-text">{title}</p>
        <div class="flex gap-x-2 bg-c-body-text border-[1px] rounded-md px-4 py-1 max-w-[33%] min-w-[150px]">
            <input type="number" name="min-price" placeholder="min" bind:value={min} class="min-w-0 text-xs text-c-secondary-dark bg-c-body-text focus:outline-none" >
            <Separator class="" orientation="vertical" />
            <input type="number" name="max-price" placeholder="max" bind:value={max} class="min-w-0 text-xs text-c-secondary-dark bg-c-body-text focus:outline-none">
        </div>
    </div>
    <Slider value={[min, max]} max={maxSlider} step={step} onValueChange={handleSliderChange} />
</div>

<style>
    input::-webkit-outer-spin-button, 
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
        appearance: textfield;
    }
</style>