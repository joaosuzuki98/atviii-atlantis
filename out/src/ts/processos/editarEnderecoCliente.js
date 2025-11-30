"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const endereco_1 = __importDefault(require("../modelos/endereco"));
class EditarEnderecoCliente extends processo_1.default {
    constructor(cliente) {
        super();
        this.cliente = cliente;
    }
    processar() {
        const endereco = this.cliente.Endereco;
        console.log('Deixe em branco se não quiser alterar um campo.');
        let rua = this.entrada.receberTexto(`Rua atual: ${endereco.Rua} | Nova rua:`);
        let bairro = this.entrada.receberTexto(`Bairro atual: ${endereco.Bairro} | Novo bairro:`);
        let cidade = this.entrada.receberTexto(`Cidade atual: ${endereco.Cidade} | Nova cidade:`);
        let estado = this.entrada.receberTexto(`Estado atual: ${endereco.Estado} | Novo estado:`);
        let pais = this.entrada.receberTexto(`País atual: ${endereco.Pais} | Novo país:`);
        let codigoPostal = this.entrada.receberTexto(`Código postal atual: ${endereco.CodigoPostal} | Novo código postal:`);
        const novoEndereco = new endereco_1.default(rua || endereco.Rua, bairro || endereco.Bairro, cidade || endereco.Cidade, estado || endereco.Estado, pais || endereco.Pais, codigoPostal || endereco.CodigoPostal);
        this.cliente.Endereco = novoEndereco;
        this.cliente.Dependentes.forEach(dep => {
            dep.Endereco = novoEndereco.clonar();
        });
        console.log('Endereço atualizado com sucesso!');
    }
}
exports.default = EditarEnderecoCliente;
