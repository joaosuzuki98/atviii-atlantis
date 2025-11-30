"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImpressorDependentesPorTitular {
    constructor(cliente) {
        this.cliente = cliente;
    }
    imprimir() {
        let impressao = '';
        if (this.cliente.Dependentes.length > 0) {
            impressao += `\nDependentes:\n`;
            this.cliente.Dependentes.forEach((dependente, index) => {
                impressao += `  -> Dependente ${index + 1}:\n`;
                impressao += `     - Nome: ${dependente.Nome}\n`;
                impressao += `     - Nome social: ${dependente.NomeSocial}\n`;
                impressao += `     - Data de nascimento: ${dependente.DataNascimento.toLocaleDateString()}\n`;
                impressao += `     - Data de cadastro: ${dependente.DataCadastro.toLocaleDateString()}\n`;
            });
        }
        else {
            impressao += `\nDependentes: Nenhum`;
        }
        impressao = impressao + `\n****************************`;
        return impressao;
    }
}
exports.default = ImpressorDependentesPorTitular;
