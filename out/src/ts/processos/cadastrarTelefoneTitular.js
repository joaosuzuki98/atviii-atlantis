"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const telefone_1 = __importDefault(require("../modelos/telefone"));
const menuTelefone_1 = __importDefault(require("../menus/menuTelefone"));
class CadastroTelefoneTitular extends processo_1.default {
    constructor(cliente) {
        super();
        this.cliente = cliente;
        this.menu = new menuTelefone_1.default();
        this.execucao = true;
    }
    processar() {
        console.log('Iniciando o cadastro de telefones...');
        while (this.execucao) {
            this.menu.mostrar();
            this.opcao = this.entrada.receberNumero('Qual opção deseja?');
            switch (this.opcao) {
                case 1:
                    let ddd = this.entrada.receberTexto('Qual o ddd?');
                    let numero = this.entrada.receberTexto('Qual o número?');
                    let telefone = new telefone_1.default(ddd, numero);
                    this.cliente.Telefones.push(telefone);
                    break;
                case 0:
                    this.execucao = false;
                    break;
                default:
                    console.log('Opção não entendida :(');
            }
        }
    }
}
exports.default = CadastroTelefoneTitular;
