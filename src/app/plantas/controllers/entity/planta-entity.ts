export interface PlantaEntity {
    id?: number;
    nomepo?: string;
    nomeci?: string;
    descricao?: string;
    luz?: string,
    temperatura?: string,
    epoca?: string,
    tempo?: string,
    solo?: string,
    irrigacao?: string,
    pragas?: any,
    foto?: ImagemEntity
}

export interface ImagemEntity {
    id?: number;
    nomeArquivo?: string;
    contentType?: string;
    tamanho?: number;
    url?: string;
}