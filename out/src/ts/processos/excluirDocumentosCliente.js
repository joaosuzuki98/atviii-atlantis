"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
class ExcluirDocumentoCliente extends processo_1.default {
    constructor(cliente) {
        super();
        this.cliente = cliente;
    }
    processar() {
        const documentos = this.cliente.Documentos;
        if (documentos.length === 0) {
            console.log('Cliente não possui documentos cadastrados.');
            return;
        }
        let numeroDoc = this.entrada.receberTexto('Digite o número do documento que deseja excluir:');
        let index = documentos.findIndex(doc => doc.Numero === numeroDoc);
        if (index === -1) {
            console.log('Documento não encontrado.');
            return;
        }
        documentos.splice(index, 1);
        console.log('Documento excluído com sucesso!');
    }
}
exports.default = ExcluirDocumentoCliente;
