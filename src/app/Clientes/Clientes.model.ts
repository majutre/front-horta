export class ClienteModel {
    public id: number;
    public nome: string;
    public sobrenome: string;
    public usuario: string;

    constructor(id: number, nome: string, sNome: string, user: string) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sNome;
        this.usuario = user;
    }
}