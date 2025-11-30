"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const verificaCliente_1 = __importDefault(require("../utils/verificaCliente"));
class ExcluirClienteTitular extends processo_1.default {
    processar() {
        console.log('Excluindo cliente...');
        let doc = this.entrada.receberTexto('Digite o número de qualquer documento cadastrado:');
        let armazem = armazem_1.default.InstanciaUnica;
        let titular = (0, verificaCliente_1.default)(armazem.Clientes, doc);
        if (!titular) {
            console.log('Titular não encontrado');
            return;
        }
        let index = armazem.Clientes.findIndex(cliente => cliente.Documentos.some(documento => documento.Numero === doc));
        for (let dependente of titular.Dependentes) {
            let indexDep = armazem.Clientes.findIndex(cliente => cliente === dependente);
            if (indexDep !== -1) {
                armazem.Clientes.splice(indexDep, 1);
            }
        }
        if (index !== -1) {
            armazem.Clientes.splice(index, 1);
            console.log('Cliente excluído com sucesso');
        }
        else {
            console.log('Cliente não encontrado para exclusão');
        }
    }
}
exports.default = ExcluirClienteTitular;
