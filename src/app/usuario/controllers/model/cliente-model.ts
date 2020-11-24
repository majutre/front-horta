export interface ClienteModel {
    id?: number;
    nome?: string;
    sobrenome?: string;
    genero?: string;
    email?: string;
    senha?: string;
    plantas: any[];
}
