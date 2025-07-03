import Impressor from "../interfaces/impressor"
import Hospedagem from "../modelos/hospedagem"

export default class ImpressorHospedagens implements Impressor {
    private hospedagem: Hospedagem
    constructor(hospedagem: Hospedagem) {
        this.hospedagem = hospedagem
    }

    imprimir(): string {
        const cliente = this.hospedagem.Cliente;
        const documentosStr = cliente.Documentos
            .map(documento => `Tipo: ${documento.Tipo} - Número: ${documento.Numero}`)
            .join(" | ");

        let descricao =
            `Cliente: ${cliente.Nome} - Documento(s): ${documentosStr}\n` +
            `-- Acomodação: ${this.hospedagem.AcomodacaoTipo}\n` +
            `-- Data inicial: ${this.hospedagem.DataInicio.toLocaleDateString()}\n` +
            `-- Data final: ${this.hospedagem.DataFim.toLocaleDateString()}\n`;

        return descricao;
    }
}