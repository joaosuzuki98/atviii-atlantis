"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImpressorTitularPorDependente {
    constructor(dependente) {
        this.dependente = dependente;
    }
    imprimir() {
        let impressao = '\nTitular do dependente:\n';
        const titular = this.dependente.Titular;
        if (!titular) {
            impressao += 'Este cliente não possui um titular.\n';
        }
        else {
            impressao += `  -> Nome: ${titular.Nome}\n`;
            impressao += `     - Nome social: ${titular.NomeSocial}\n`;
            impressao += `     - Data de nascimento: ${titular.DataNascimento.toLocaleDateString()}\n`;
            impressao += `     - Data de cadastro: ${titular.DataCadastro.toLocaleDateString()}\n`;
        }
        impressao += `\n****************************`;
        return impressao;
    }
}
exports.default = ImpressorTitularPorDependente;
