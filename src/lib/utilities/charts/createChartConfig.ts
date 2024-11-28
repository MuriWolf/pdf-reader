import type { TooltipItem } from "chart.js";

export function createChartConfig(title: string, showLegend: boolean) {
    return {
        maintainAspectRatio: false, 
        responsive: true,
        plugins: {
            legend: {
                display: showLegend,
            },
            tooltip: {
                callbacks: {
                    label: function (context:TooltipItem <"bar" | "line" | "pie" | "doughnut">) {
                        const index = context.dataIndex;
                        const label = context.dataset.label;

                        const labelText = Array.isArray(label) ? label[index] : label; 

                        // Se o label não existir ou estiver vazio, usamos um fallback
                        const displayLabel = labelText ? labelText : 'Descrição Não Encontrada';

                        const value = context.raw;
                        return `${displayLabel}: ${value}`;
                    }
                },
                padding: 12,
                bodyFont: {
                    size: 13,
                    weight: 700
                },
                boxPadding: 10,
                displayColors: true
            },
            title: {
                display: true,
                text: title,
                font: {
                    size: 18,
                    Weight: 'semibold',
                    family: 'sora',
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
        }
    }
}