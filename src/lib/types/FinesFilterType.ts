import type { DateValue } from "@internationalized/date"

export interface filtersType {
    titulo: string,
    natureza_infracao: { value: string | number | undefined },
    tipo_infracao: { value: string | number | undefined },
    date_infracao: {
        start: DateValue | undefined,
        end: DateValue | undefined
    }
}
