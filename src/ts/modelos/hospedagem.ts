import Cliente from "./cliente"
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao"

export default class Hospedagem {
    private acomodacaoTipo: NomeAcomadacao
    private cliente: Cliente
    private dataInicio: Date
    private dataFim: Date

    constructor(acomodacaoTipo: NomeAcomadacao, cliente: Cliente, dataInicio: Date, dataFim: Date) {
        this.acomodacaoTipo = acomodacaoTipo
        this.cliente = cliente
        this.dataInicio = dataInicio
        this.dataFim = dataFim
    }

    public get AcomodacaoTipo() { return this.acomodacaoTipo }
    public get Cliente() { return this.cliente }
    public get DataInicio() { return this.dataInicio }
    public get DataFim() { return this.dataFim }

    public set AcomodacaoTipo(acomodacaoTipo: NomeAcomadacao) { this.acomodacaoTipo = acomodacaoTipo }
    public set Cliente(cliente: Cliente) { this.cliente = cliente }
    public set DataInicio(dataInicio: Date) { this.dataInicio = dataInicio }
    public set DataFim(dataFim: Date) { this.dataFim = dataFim }
}