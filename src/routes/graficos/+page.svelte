<script lang="ts">
    import type { AllChartsType } from "$lib/types/charts/AllChartsType";
    import { Line, Pie, Doughnut, Bar } from 'svelte-chartjs'
    import { Chart as ChartJS, registerables} from 'chart.js'
    import type {TooltipItem} from 'chart.js'
    import { text } from "@sveltejs/kit";
    import { Weight } from "lucide-svelte";
    ChartJS.register(...registerables)
    export let data: AllChartsType;

    if (data) {
        console.log(data);
    }


    const config = {
        maintainAspectRatio: false, // Permite ajustar a altura e largura do gráfico
        responsive: true, // Torna o gráfico responsivo
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context:TooltipItem <'bar'>) {
                        const datasetIndex = context.datasetIndex || '';
                        const index = context.dataIndex;

                        const label = context.dataset.label;

                        const labelText = Array.isArray(label) ? label[index] : label; 

                        // Se o label não existir ou estiver vazio, usamos um fallback
                    const displayLabel = labelText ? labelText : 'Descrição Não Encontrada';

                        const value = context.raw;
                        return `${displayLabel}: ${value}`;
                    }
                },
                padding: 20,
                bodyFont: {
                    size: 14,
                    weight: 700
                },
                boxPadding: 10,
                displayColors: false
            },
            title: {
                display: true,
                text: 'Titulo do Grafico',
                font: {
                    size: 24,
                    Weight: 'bold',
                    family: 'Arial',
                },
                padding: {
                    top: 10,
                    bottom: 10,
                    left: 20,
                    right: 20
                }
            }
        },
        layout: {
            padding: {
                top: 10,
                bottom: 10,
                left: 20,
                right: 20
            }
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    };

</script>

<main class="grid-charts-container mx-auto max-w-4xl gap-4 mb-16">
    {#if data.enquadramento}
        <div class="graph-one w-full p-4 rounded-lg bg-c-secondary">
            <Bar data={data.enquadramento} width={300} height={300} options={config} />
        </div>
    {/if}
    {#if data.natureza}
        <div class="graph-two p-4 w-full rounded-lg bg-c-secondary">
            <Doughnut data={data.natureza} width={300} height={300} options={{ maintainAspectRatio: false }} />
        </div>
    {/if}
    {#if data.marca_veiculo}
        <div class="graph-three w-full p-4 rounded-lg bg-c-secondary">
            <Bar data={data.marca_veiculo} width={300} height={300} options={config} />
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