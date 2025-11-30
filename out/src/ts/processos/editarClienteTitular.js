"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const verificaCliente_1 = __importDefault(require("../utils/verificaCliente"));
const editarDocumentosCliente_1 = __importDefault(require("./editarDocumentosCliente"));
const editarEnderecoCliente_1 = __importDefault(require("./editarEnderecoCliente"));
const editarTelefoneCliente_1 = __importDefault(require("./editarTelefoneCliente"));
class EditarClienteTitular extends processo_1.default {
    processar() {
        console.log('Editando cliente...');
        let doc = this.entrada.receberTexto('Digite o número de qualquer documento cadastrado:');
        let armazem = armazem_1.default.InstanciaUnica;
        let titular = (0, verificaCliente_1.default)(armazem.Clientes, doc);
        if (!titular) {
            console.log('Titular não encontrado');
            return;
        }
        console.log('Deixe em branco caso não queira mudar');
        let nome = this.entrada.receberTexto('Qual o novo nome do cliente?');
        let nomeSocial = this.entrada.receberTexto('Qual o novo nome social do cliente?');
        let dataNascimento = this.entrada.receberData('Qual a nova data de nascimento do cliente (se não quiser mudar, coloque a mesma data)?');
        if (nome)
            titular.Nome = nome;
        if (nomeSocial)
            titular.NomeSocial = nomeSocial;
        if (dataNascimento)
            titular.DataNascimento = dataNascimento;
        let editarDoc = this.entrada.receberTexto('Deseja editar algum documento? (s/n)').toLowerCase();
        if (editarDoc === 's') {
            let editarDocumento = new editarDocumentosCliente_1.default(titular);
            editarDocumento.processar();
        }
        let editarEndereco = this.entrada.receberTexto('Deseja editar o endereço? (s/n)').toLowerCase();
        if (editarEndereco === 's') {
            let editarEnderecoCliente = new editarEnderecoCliente_1.default(titular);
            editarEnderecoCliente.processar();
        }
        let editarTelefones = this.entrada.receberTexto('Deseja editar os telefones? (s/n)').toLowerCase();
        if (editarTelefones === 's') {
            let editarTelefoneCliente = new editarTelefoneCliente_1.default(titular);
            editarTelefoneCliente.processar();
        }
        console.log('Finalizando o cadastro do cliente...');
    }
}
exports.default = EditarClienteTitular;
