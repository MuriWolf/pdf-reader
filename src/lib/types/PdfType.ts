export interface PdfType {
    id: number;
    user_id: number;
    nome_pessoa: string;
    // cpf: string;
    placa_veiculo: string;
    marca_veiculo: string;
    especie: string;
    infracao: string;
    natureza: string;
    pontuacao: string;
    data_envio: number;
    data_infracao: string;
    hora_infracao: string;
    endereco_infracao: string;
    velocidade_regulamentada: string;
    velocidade_media: string;
    velocidade_considerada: string;
    enquadramento: string;
    artigo_ctb: string;
    numero_ait: string;
    data_limite_ind_condutor: string;
    nro_infraest: string;
    identificacao_equipamento: string;
    afericao_certificacao: string;
    agente_transito: string;
}