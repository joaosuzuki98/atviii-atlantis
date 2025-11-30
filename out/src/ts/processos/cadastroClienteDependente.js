"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const cliente_1 = __importDefault(require("../modelos/cliente"));
const verificaCliente_1 = __importDefault(require("../utils/verificaCliente"));
const cadastrarDocumentosCliente_1 = __importDefault(require("./cadastrarDocumentosCliente"));
class CadastroClienteDependente extends processo_1.default {
    processar() {
        console.log('Iniciando o cadastro de um novo dependente...');
        let doc = this.entrada.receberTexto('Digite o número de qualquer documento cadastrado do titular:');
        let armazem = armazem_1.default.InstanciaUnica;
        let titular = (0, verificaCliente_1.default)(armazem.Clientes, doc);
        if (!titular) {
            console.log('Titular não encontrado');
            return;
        }
        let nome = this.entrada.receberTexto('Qual o nome do novo dependente?');
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo dependente?');
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?');
        let dependente = new cliente_1.default(nome, nomeSocial, dataNascimento);
        dependente.Endereco = titular.Endereco.clonar();
        dependente.setTelefone(titular.Telefones.map(telefone => telefone.clonar()));
        dependente.Titular = titular;
        this.processo = new cadastrarDocumentosCliente_1.default(dependente);
        this.processo.processar();
        armazem.Clientes.push(dependente);
        titular.Dependentes.push(dependente);
        console.log('Finalizando o cadastro do dependente...');
    }
}
exports.default = CadastroClienteDependente;
