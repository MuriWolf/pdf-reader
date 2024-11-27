import type { UserType } from "../UserType";
import type { BarChartType } from "./BarChartType";
import type { LineChartType } from "./LineChartType";
import type { PieChartType } from "./PieChartType";

export interface AllChartsType {
    data_infracao: LineChartType,
    enquadramento: BarChartType,
    marca_veiculo: BarChartType,
    natureza: PieChartType,
    velocidade_regulamentada: PieChartType,
    user: UserType
}