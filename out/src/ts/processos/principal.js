"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const menuPricipal_1 = __importDefault(require("../menus/menuPricipal"));
const tipoCadastroCliente_1 = __importDefault(require("./tipoCadastroCliente"));
const tipoEdicaoCliente_1 = __importDefault(require("./tipoEdicaoCliente"));
const tipoExcluisaoCliente_1 = __importDefault(require("./tipoExcluisaoCliente"));
const tipoListagemClientes_1 = __importDefault(require("./tipoListagemClientes"));
const listagemAcomodacoes_1 = __importDefault(require("./listagemAcomodacoes"));
const listagemHospedagens_1 = __importDefault(require("./listagemHospedagens"));
const edicaoHospedagem_1 = __importDefault(require("./edicaoHospedagem"));
const exclusaoHospedagem_1 = __importDefault(require("./exclusaoHospedagem"));
const cadastroHospedagem_1 = __importDefault(require("./cadastroHospedagem"));
class Principal extends processo_1.default {
    constructor() {
        super();
        this.execucao = true;
        this.menu = new menuPricipal_1.default();
    }
    processar() {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual opção desejada?');
        switch (this.opcao) {
            case 1:
                this.processo = new tipoCadastroCliente_1.default();
                this.processo.processar();
                break;
            case 2:
                this.processo = new tipoEdicaoCliente_1.default();
                this.processo.processar();
                break;
            case 3:
                this.processo = new tipoListagemClientes_1.default();
                this.processo.processar();
                break;
            case 4:
                this.processo = new tipoExcluisaoCliente_1.default();
                this.processo.processar();
                break;
            case 5:
                this.processo = new listagemAcomodacoes_1.default();
                this.processo.processar();
                break;
            case 6:
                this.processo = new cadastroHospedagem_1.default();
                this.processo.processar();
                break;
            case 7:
                this.processo = new listagemHospedagens_1.default();
                this.processo.processar();
                break;
            case 8:
                this.processo = new edicaoHospedagem_1.default();
                this.processo.processar();
                break;
            case 9:
                this.processo = new exclusaoHospedagem_1.default();
                this.processo.processar();
                break;
            case 0:
                this.execucao = false;
                console.log('Até logo!');
                console.clear();
                break;
            default:
                console.log('Opção não entendida :(');
        }
    }
}
exports.default = Principal;
