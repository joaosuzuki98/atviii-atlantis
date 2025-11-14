"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const NomeAcomadacao_1 = require("../enumeracoes/NomeAcomadacao");
const impressorAcomodacao_1 = __importDefault(require("../impressores/impressorAcomodacao"));
const hospedagem_1 = __importDefault(require("../modelos/hospedagem"));
const verificaCliente_1 = __importDefault(require("../utils/verificaCliente"));
class CadastroHospedagem extends processo_1.default {
    constructor() {
        super();
        this.armazem = armazem_1.default.InstanciaUnica;
    }
    processar() {
        console.log('Iniciando o cadastro de hospedagem...');
        let clienteDoc = this.entrada.receberTexto('Digite o número de qualquer documento do cliente:');
        let cliente = (0, verificaCliente_1.default)(this.armazem.Clientes, clienteDoc);
        if (!cliente) {
            console.log('Cliente não encontrado.');
            return;
        }
        this.armazem.Acomodacoes.forEach((acomodacao, index) => {
            this.impressor = new impressorAcomodacao_1.default(acomodacao);
            console.log(`${index + 1}. ${this.impressor.imprimir()}`);
        });
        let acomodacaoEscolha = this.entrada.receberNumero('Digite o número da acomodação você deseja:');
        let acomodacaoTipo;
        switch (acomodacaoEscolha) {
            case 1:
                acomodacaoTipo = NomeAcomadacao_1.NomeAcomadacao.SolteiroSimples;
                break;
            case 2:
                acomodacaoTipo = NomeAcomadacao_1.NomeAcomadacao.CasalSimples;
                break;
            case 3:
                acomodacaoTipo = NomeAcomadacao_1.NomeAcomadacao.FamilaSimples;
                break;
            case 4:
                acomodacaoTipo = NomeAcomadacao_1.NomeAcomadacao.FamiliaMais;
                break;
            case 5:
                acomodacaoTipo = NomeAcomadacao_1.NomeAcomadacao.FamiliaSuper;
                break;
            case 6:
                acomodacaoTipo = NomeAcomadacao_1.NomeAcomadacao.SolteiroMais;
                break;
            default:
                console.log('Não entendi a opção :B');
                return;
        }
        let dataInicial = this.entrada.receberData('Digite a data inicial da reserva da hospedagem');
        let dataFinal = this.entrada.receberData('Digite a data final da reserva da hospedagem');
        let hospedagem = new hospedagem_1.default(acomodacaoTipo, cliente, dataInicial, dataFinal);
        this.armazem.Hospedagem.push(hospedagem);
        console.log('Finalizando o cadastro da hospedagem...');
    }
}
exports.default = CadastroHospedagem;
