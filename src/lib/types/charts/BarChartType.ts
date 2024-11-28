export interface BarChartType {
    labels: string[];
    datasets: [{
        data: number[]; // Array of string values representing data points
        label: string[]; // The label for the dataset
        backgroundColor: string[]; // Array of RGBA strings for background colors
        borderWidth: number; // Width of the border
        borderColor: string[]; // Array of RGBA strings for border colors
    }]

}