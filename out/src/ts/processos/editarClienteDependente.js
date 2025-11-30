"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const verificaCliente_1 = __importDefault(require("../utils/verificaCliente"));
const editarDocumentosCliente_1 = __importDefault(require("./editarDocumentosCliente"));
class EditarClienteDependente extends processo_1.default {
    processar() {
        console.log('Editando dependente...');
        let doc = this.entrada.receberTexto('Digite o número de qualquer documento do dependente:');
        let armazem = armazem_1.default.InstanciaUnica;
        let dependente = (0, verificaCliente_1.default)(armazem.Clientes, doc);
        if (!dependente || !dependente.Titular) {
            console.log('Dependente não encontrado ou não é um dependente.');
            return;
        }
        console.log('Deixe em branco caso não queira mudar.');
        let nome = this.entrada.receberTexto('Novo nome:');
        let nomeSocial = this.entrada.receberTexto('Novo nome social:');
        let dataNascimento = this.entrada.receberData('Nova data de nascimento:');
        if (nome)
            dependente.Nome = nome;
        if (nomeSocial)
            dependente.NomeSocial = nomeSocial;
        if (dataNascimento)
            dependente.DataNascimento = dataNascimento;
        let editarDoc = this.entrada.receberTexto('Deseja editar algum documento? (s/n)').toLowerCase();
        if (editarDoc === 's') {
            let editarDocumento = new editarDocumentosCliente_1.default(dependente);
            editarDocumento.processar();
        }
        console.log('Edição finalizada.');
    }
}
exports.default = EditarClienteDependente;
