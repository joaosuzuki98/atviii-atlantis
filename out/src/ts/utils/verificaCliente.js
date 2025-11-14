"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = verificaCliente;
function verificaCliente(clientes, doc) {
    for (let cliente of clientes) {
        for (let documento of cliente.Documentos) {
            if (documento.Numero === doc) {
                return cliente;
            }
        }
    }
    return null;
}
