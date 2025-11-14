"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const impressorHospedagens_1 = __importDefault(require("../impressores/impressorHospedagens"));
class ListagemHospedagens extends processo_1.default {
    constructor() {
        super();
        this.hospedagens = armazem_1.default.InstanciaUnica.Hospedagem;
    }
    processar() {
        console.clear();
        console.log('Iniciando a listagem das Hospedagens...');
        console.log(`-------------------------------------------------`);
        this.hospedagens.forEach(hospedagem => {
            this.impressor = new impressorHospedagens_1.default(hospedagem);
            console.log(this.impressor.imprimir());
            console.log(`-------------------------------------------------`);
        });
    }
}
exports.default = ListagemHospedagens;
