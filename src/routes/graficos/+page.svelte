<script lang="ts">
    import type { AllChartsType } from "$lib/types/charts/AllChartsType";
    import { Line, Pie, Doughnut, Bar } from 'svelte-chartjs'
    import { Chart as ChartJS, registerables } from 'chart.js'
    ChartJS.register(...registerables)
    export let data: AllChartsType;

    if (data) {
        console.log(data);
    }
</script>

<main class="grid-charts-container mx-auto max-w-4xl gap-4 mb-16">
    {#if data.enquadramento}
        <div class="graph-one w-full p-4 rounded-lg bg-c-secondary">
            <Bar data={data.enquadramento} width={300} height={300} options={{ maintainAspectRatio: false }} />
        </div>
    {/if}
    {#if data.natureza}
        <div class="graph-two p-4 w-full rounded-lg bg-c-secondary">
            <Doughnut data={data.natureza} width={300} height={300} options={{ maintainAspectRatio: false }} />
        </div>
    {/if}
    {#if data.marca_veiculo}
        <div class="graph-three w-full p-4 rounded-lg bg-c-secondary">
            <Bar data={data.marca_veiculo} width={300} height={300} options={{ maintainAspectRatio: false }} />
        </div>
    {/if}
    {#if data.velocidade_regulamentada}
        <div class="graph-four p-4 w-full rounded-lg bg-c-secondary">
            <Pie data={data.velocidade_regulamentada} width={300} height={300} options={{ maintainAspectRatio: false }} />
        </div>
    {/if}
    
    <div class="graph-five p-4 w-full rounded-lg bg-c-secondary">
        <Line data={data.data_infracao} width={300} height={300} options={{ maintainAspectRatio: false }} />
    </div>
</main>

<style>
    .graph-one {
        grid-area: graphOne;
    }

    .graph-two {
        grid-area: graphTwo;
    }

    .graph-three {
        grid-area: graphThree;
    }

    .graph-four {
        grid-area: graphFour;
    }

    .graph-five {
        grid-area: graphFive;
    }

    .grid-charts-container {
        display: grid;
        grid-template: 
            'graphOne graphOne graphTwo'
            'graphThree graphThree graphFour'
            'graphFive graphFive graphFive'
        }
</style>