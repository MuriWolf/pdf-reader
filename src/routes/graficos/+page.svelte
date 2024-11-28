<script lang="ts">
    import type { AllChartsType } from "$lib/types/charts/AllChartsType";
    import { Line, Pie, Doughnut, Bar } from 'svelte-chartjs'
    import { Chart as ChartJS, Legend, registerables} from 'chart.js'
    import type {ChartOptions, ChartTypeRegistry, CoreChartOptions, TooltipItem} from 'chart.js'
    import { createChartConfig } from "$lib/utilities/charts/createChartConfig";
    ChartJS.register(...registerables)
    ChartJS.defaults.color = '#f8fafc';
    ChartJS.defaults.borderColor = '#334155bb';
    ChartJS.defaults.font.family = "sora";

    export let data: AllChartsType;

    if (data) {
        console.log(data);
    }
 </script>

<main class="grid-charts-container mx-auto max-w-4xl gap-4 mb-16">
    {#if data.enquadramento}
        <div class="graph-one w-full p-4 rounded-lg bg-c-secondary ">
            <Bar data={data.enquadramento} width={300} height={350} options={createChartConfig("Enquadramentos", false)} />
        </div>
    {/if}
    {#if data.natureza}
        <div class="graph-two p-4 w-full rounded-lg bg-c-secondary">
            <Doughnut data={data.natureza} width={300} height={400} options={createChartConfig("Gráfico de Natureza das Infrações", true)} />
        </div>
    {/if}
    {#if data.marca_veiculo}
        <div class="graph-three w-full p-4 rounded-lg bg-c-secondary">
            <Bar data={data.marca_veiculo} width={300} height={300} options={createChartConfig("Marcas de veículo", false)} />
        </div>
    {/if}
    {#if data.velocidade_regulamentada}
        <div class="graph-four p-4 w-full rounded-lg bg-c-secondary">
            <Pie data={data.velocidade_regulamentada} width={300} height={350} options={createChartConfig("Gráfico de Velocidade Regulamentada", true)} />
        </div>
    {/if}
    
    <div class="graph-five p-4 w-full rounded-lg bg-c-secondary">
        <Line data={data.data_infracao} width={300} height={300} options={createChartConfig("Gráfico de Data das Infrações (por ano)", false)} />
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