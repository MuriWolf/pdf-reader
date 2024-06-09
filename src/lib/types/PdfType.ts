export interface PdfType {
    id: number;
    titulo_pdf: string
    data_envio: number
    id_user: number;
    nome_do_condutor: string;
    nome_pessoa: string;
    cpf: string;
    placa_veiculo: string;
    infracao: string;
    gravidade: string;
    data_infracao: string;
    hora_infracao: string;
    endereco_infracao: string
}