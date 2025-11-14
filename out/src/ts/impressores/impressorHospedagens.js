"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ImpressorHospedagens {
    constructor(hospedagem) {
        this.hospedagem = hospedagem;
    }
    imprimir() {
        const cliente = this.hospedagem.Cliente;
        const documentosStr = cliente.Documentos
            .map(documento => `Tipo: ${documento.Tipo} - Número: ${documento.Numero}`)
            .join(" | ");
        let descricao = `Cliente: ${cliente.Nome} - Documento(s): ${documentosStr}\n` +
            `-- Acomodação: ${this.hospedagem.AcomodacaoTipo}\n` +
            `-- Data inicial: ${this.hospedagem.DataInicio.toLocaleDateString()}\n` +
            `-- Data final: ${this.hospedagem.DataFim.toLocaleDateString()}\n`;
        return descricao;
    }
}
exports.default = ImpressorHospedagens;
