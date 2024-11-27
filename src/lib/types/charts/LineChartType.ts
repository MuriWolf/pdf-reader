export interface LineChartType {
    labels: string[]; // Array of labels (years)
    datasets: [{
        label: string;
        fill: boolean; // Indicates if the area under the line should be filled
        backgroundColor: string; // Background color for the chart
        lineTension: number; // Tension of the line
        borderColor: string; // Color of the border
        borderCapStyle: string; // Style of the border caps
        borderDash: number[]; // Dash pattern for the border
        borderDashOffset: number; // Offset for the dash pattern
        borderJoinStyle: string; // Style for joining borders
        pointBorderColor: string; // Color of the point borders
        pointBackgroundColor: string; // Background color of the points
        pointBorderWidth: number; // Width of the point borders
        pointHoverRadius: number; // Radius of points on hover
        pointHoverBackgroundColor: string; // Background color of points on hover
        pointHoverBorderColor: string; // Border color of points on hover
        pointHoverBorderWidth: number; // Border width of points on hover
        pointRadius: number; // Radius of the points
        pointHitRadius: number; // Hit radius for interaction
        data: number[]; // Array of date strings in "DD/MM/YYYY" format
    }];
    
}