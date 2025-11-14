"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hospedagem {
    constructor(acomodacaoTipo, cliente, dataInicio, dataFim) {
        this.acomodacaoTipo = acomodacaoTipo;
        this.cliente = cliente;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }
    get AcomodacaoTipo() { return this.acomodacaoTipo; }
    get Cliente() { return this.cliente; }
    get DataInicio() { return this.dataInicio; }
    get DataFim() { return this.dataFim; }
    set AcomodacaoTipo(acomodacaoTipo) { this.acomodacaoTipo = acomodacaoTipo; }
    set Cliente(cliente) { this.cliente = cliente; }
    set DataInicio(dataInicio) { this.dataInicio = dataInicio; }
    set DataFim(dataFim) { this.dataFim = dataFim; }
}
exports.default = Hospedagem;
