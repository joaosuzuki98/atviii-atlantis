"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const verificaCliente_1 = __importDefault(require("../utils/verificaCliente"));
const impressorDependentesPorTitular_1 = __importDefault(require("../impressores/impressorDependentesPorTitular"));
class ListagemDependentesPorTitulares extends processo_1.default {
    processar() {
        console.clear();
        console.log('Listar dependentes de um titular');
        const doc = this.entrada.receberTexto('Digite o número de um documento do titular:');
        const armazem = armazem_1.default.InstanciaUnica;
        const cliente = (0, verificaCliente_1.default)(armazem.Clientes, doc);
        if (!cliente) {
            console.log('Cliente não encontrado');
            return;
        }
        if (cliente.Titular !== undefined) {
            console.log('Este cliente não é um titular');
            return;
        }
        const impressor = new impressorDependentesPorTitular_1.default(cliente);
        console.log(impressor.imprimir());
    }
}
exports.default = ListagemDependentesPorTitulares;
