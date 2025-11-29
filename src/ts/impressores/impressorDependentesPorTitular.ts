import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ImpressorDependentesPorTitular implements Impressor {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        this.cliente = cliente
    }

    imprimir(): string {
        let impressao = ''
        if (this.cliente.Dependentes.length > 0) {
            impressao += `\nDependentes:\n`
            this.cliente.Dependentes.forEach((dependente, index) => {
                impressao += `  -> Dependente ${index + 1}:\n`
                impressao += `     - Nome: ${dependente.Nome}\n`
                impressao += `     - Nome social: ${dependente.NomeSocial}\n`
                impressao += `     - Data de nascimento: ${dependente.DataNascimento.toLocaleDateString()}\n`
                impressao += `     - Data de cadastro: ${dependente.DataCadastro.toLocaleDateString()}\n`
            })
        } else {
            impressao += `\nDependentes: Nenhum`
        }

        impressao = impressao + `\n****************************`
        return impressao
    }
}