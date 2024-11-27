// tambem pode ser usado para o donut chart

export interface PieChartType {
    labels: string[];
    datasets: [{
        label: string;
        data: number[];
        backgroundColor: string[]; 
        hover_backgroundColor: string[];
    }]
}