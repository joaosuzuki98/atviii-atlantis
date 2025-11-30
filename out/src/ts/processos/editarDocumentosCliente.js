"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const menuEdicaoDocumento_1 = __importDefault(require("../menus/menuEdicaoDocumento"));
const cadastrarDocumentosCliente_1 = __importDefault(require("./cadastrarDocumentosCliente"));
const excluirDocumentosCliente_1 = __importDefault(require("./excluirDocumentosCliente"));
class EditarDocumentoCliente extends processo_1.default {
    constructor(cliente) {
        super();
        this.cliente = cliente;
        this.menu = new menuEdicaoDocumento_1.default();
        this.execucao = true;
    }
    processar() {
        const documentos = this.cliente.Documentos;
        if (documentos.length === 0) {
            console.log('Cliente não possui documentos cadastrados.');
            return;
        }
        while (this.execucao) {
            this.menu.mostrar();
            this.opcao = this.entrada.receberNumero('Qual opção desejada?');
            switch (this.opcao) {
                case 1:
                    let numeroDoc = this.entrada.receberTexto('Digite o número do documento que deseja editar:');
                    let documento = documentos.find(doc => doc.Numero === numeroDoc);
                    if (!documento) {
                        console.log('Documento não encontrado.');
                        return;
                    }
                    console.log('Deixe em branco se não quiser alterar um campo.');
                    let novoNumero = this.entrada.receberTexto('Novo número do documento:');
                    let novaDataExpedicao = this.entrada.receberData('Nova data de expedição:');
                    if (novoNumero)
                        documento.SetNumero = novoNumero;
                    if (novaDataExpedicao)
                        documento.SetDataExpedicao = novaDataExpedicao;
                    break;
                case 2:
                    let cadastrarDocumento = new cadastrarDocumentosCliente_1.default(this.cliente);
                    cadastrarDocumento.processar();
                    break;
                case 3:
                    let excluirDocumento = new excluirDocumentosCliente_1.default(this.cliente);
                    excluirDocumento.processar();
                    break;
                case 0:
                    this.execucao = false;
                    break;
                default:
                    console.log('Não entendi a opção :B');
            }
            console.log('Documento atualizado com sucesso!');
        }
    }
}
exports.default = EditarDocumentoCliente;
