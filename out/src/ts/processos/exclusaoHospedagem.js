"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const verificaCliente_1 = __importDefault(require("../utils/verificaCliente"));
class ExcluirHospedagem extends processo_1.default {
    processar() {
        console.log('Excluindo hospedagem...');
        let doc = this.entrada.receberTexto('Digite o número de qualquer documento do cliente:');
        let armazem = armazem_1.default.InstanciaUnica;
        let cliente = (0, verificaCliente_1.default)(armazem.Clientes, doc);
        if (!cliente) {
            console.log('Cliente não encontrado');
            return;
        }
        let hospedagensDoCliente = armazem.Hospedagem.filter(h => h.Cliente === cliente);
        if (hospedagensDoCliente.length === 0) {
            console.log('Esse cliente não possui hospedagens.');
            return;
        }
        hospedagensDoCliente.forEach((hosp, index) => {
            console.log(`${index + 1}. Acomodação: ${hosp.AcomodacaoTipo}, De: ${hosp.DataInicio.toLocaleDateString()} até ${hosp.DataFim.toLocaleDateString()}`);
        });
        let escolha = this.entrada.receberNumero('Digite o número da hospedagem que deseja excluir:');
        let hospedagemSelecionada = hospedagensDoCliente[escolha - 1];
        if (!hospedagemSelecionada) {
            console.log('Hospedagem inválida.');
            return;
        }
        let index = armazem.Hospedagem.findIndex(h => h === hospedagemSelecionada);
        if (index !== -1) {
            armazem.Hospedagem.splice(index, 1);
            console.log('Hospedagem excluída com sucesso.');
        }
        else {
            console.log('Hospedagem não encontrada para exclusão.');
        }
    }
}
exports.default = ExcluirHospedagem;
