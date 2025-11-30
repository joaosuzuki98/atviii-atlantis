"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const menuEdicaoTelefone_1 = __importDefault(require("../menus/menuEdicaoTelefone"));
const cadastrarTelefoneTitular_1 = __importDefault(require("./cadastrarTelefoneTitular"));
class EditarTelefoneCliente extends processo_1.default {
    constructor(cliente) {
        super();
        this.cliente = cliente;
        this.menu = new menuEdicaoTelefone_1.default();
        this.execucao = true;
    }
    processar() {
        const telefones = this.cliente.Telefones;
        if (telefones.length === 0) {
            console.log('Cliente não possui telefones cadastrados.');
            return;
        }
        while (this.execucao) {
            this.menu.mostrar();
            this.opcao = this.entrada.receberNumero('Escolha uma opção:');
            switch (this.opcao) {
                case 1:
                    const numeroOriginal = this.entrada.receberTexto('Digite o número (somente os dígitos) do telefone que deseja editar:');
                    const telefoneExistente = telefones.find(tel => tel.Numero === numeroOriginal);
                    if (!telefoneExistente) {
                        console.log('Telefone não encontrado.');
                        break;
                    }
                    const novoDdd = this.entrada.receberTexto('Novo DDD:');
                    const novoNumero = this.entrada.receberTexto('Novo número:');
                    if (novoDdd && novoNumero) {
                        telefoneExistente['ddd'] = novoDdd;
                        telefoneExistente['numero'] = novoNumero;
                        this.cliente.Dependentes.forEach(dep => {
                            dep.setTelefone(this.cliente.Telefones.map(t => t.clonar()));
                        });
                        console.log('Telefone atualizado.');
                    }
                    break;
                case 2:
                    this.processo = new cadastrarTelefoneTitular_1.default(this.cliente);
                    this.processo.processar();
                    this.cliente.Dependentes.forEach(dep => {
                        dep.setTelefone(this.cliente.Telefones.map(t => t.clonar()));
                    });
                    console.log('Telefone adicionado.');
                    break;
                case 3:
                    const numeroRemover = this.entrada.receberTexto('Digite o número (somente os dígitos) do telefone que deseja remover:');
                    const indice = telefones.findIndex(tel => tel.Numero === numeroRemover);
                    if (indice !== -1) {
                        telefones.splice(indice, 1);
                        this.cliente.setTelefone(telefones);
                        this.cliente.Dependentes.forEach(dep => {
                            dep.setTelefone(this.cliente.Telefones.map(t => t.clonar()));
                        });
                        console.log('Telefone removido.');
                    }
                    else {
                        console.log('Telefone não encontrado.');
                    }
                    break;
                case 0:
                    this.execucao = false;
                    break;
                default:
                    console.log('Não entendi a opção :B.');
            }
        }
    }
}
exports.default = EditarTelefoneCliente;
