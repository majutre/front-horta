export interface PragaModel {
    id?: number;
    nome?: string;
    nomec?: string;
    descricao?: string;
    tratamento?: string,
    tipo?: string,
    dano?: string,
    controle?: string,
    plantas?: string,
    foto?: ImagemModel
}

export interface ImagemModel {
    id?: number;
    nomeArquivo?: string;
    contentType?: string;
    tamanho?: number;
    url?: string;
}