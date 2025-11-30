"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const verificaCliente_1 = __importDefault(require("../utils/verificaCliente"));
class ExcluirClienteDependente extends processo_1.default {
    processar() {
        console.log('Excluindo dependente...');
        let doc = this.entrada.receberTexto('Digite o número de qualquer documento do dependente:');
        let armazem = armazem_1.default.InstanciaUnica;
        let dependente = (0, verificaCliente_1.default)(armazem.Clientes, doc);
        if (!dependente) {
            console.log('Dependente não encontrado.');
            return;
        }
        if (!dependente.Titular) {
            console.log('O cliente informado não é um dependente.');
            return;
        }
        let index = armazem.Clientes.findIndex(cliente => cliente === dependente);
        if (index !== -1) {
            armazem.Clientes.splice(index, 1);
        }
        let titular = dependente.Titular;
        titular.Dependentes = titular.Dependentes.filter(dep => dep !== dependente);
        console.log('Dependente excluído com sucesso.');
    }
}
exports.default = ExcluirClienteDependente;
