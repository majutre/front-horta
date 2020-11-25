export interface PragaEntity {
    id?: number;
    nomePopular?: string;
    nomeCientifico?: string;
    descricao?: string;
    tratamento?: string,
    tipo?: string,
    dano?: string,
    controle?: string,
    plantas?: any,
    foto?: ImagemEntity
}

export interface ImagemEntity {
    id?: number;
    nomeArquivo?: string;
    contentType?: string;
    tamanho?: number;
    url?: string;
}