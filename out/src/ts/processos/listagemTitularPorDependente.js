"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const verificaCliente_1 = __importDefault(require("../utils/verificaCliente"));
const impressorTitularPorDependente_1 = __importDefault(require("../impressores/impressorTitularPorDependente"));
class ListagemtitularPorDependente extends processo_1.default {
    processar() {
        console.clear();
        console.log('Buscar titular de um dependente');
        const doc = this.entrada.receberTexto('Digite o número de um documento do dependente:');
        const armazem = armazem_1.default.InstanciaUnica;
        const dependente = (0, verificaCliente_1.default)(armazem.Clientes, doc);
        if (!dependente) {
            console.log('Cliente não encontrado');
            return;
        }
        if (!dependente.Titular) {
            console.log('Este cliente não possui titular (provavelmente é ele próprio o titular)');
            return;
        }
        const impressor = new impressorTitularPorDependente_1.default(dependente);
        console.log(impressor.imprimir());
    }
}
exports.default = ListagemtitularPorDependente;
