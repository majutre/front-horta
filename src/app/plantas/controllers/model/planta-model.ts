import { PragaModel } from './../../../pragas/controllers/model/praga-model';

export interface PlantaModel {
    id?: number;
    nome?: string;
    nomec?: string;
    descricao?: string;
    luz?: string,
    temperatura?: string,
    epoca?: string,
    tempo?: string,
    solo?: string,
    irrigacao?: string,
    pragas?: PragaModel,
    foto?: ImagemModel
}

export interface ImagemModel {
    id?: number;
    nomeArquivo?: string;
    contentType?: string;
    tamanho?: number;
    url?: string;
}