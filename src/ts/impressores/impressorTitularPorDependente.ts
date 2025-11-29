import Impressor from "../interfaces/impressor"
import Cliente from "../modelos/cliente"

export default class ImpressorTitularPorDependente implements Impressor {
    private dependente: Cliente

    constructor(dependente: Cliente) {
        this.dependente = dependente
    }

    imprimir(): string {
        let impressao = '\nTitular do dependente:\n'
        const titular = this.dependente.Titular

        if (!titular) {
            impressao += 'Este cliente não possui um titular.\n'
        } else {
            impressao += `  -> Nome: ${titular.Nome}\n`
            impressao += `     - Nome social: ${titular.NomeSocial}\n`
            impressao += `     - Data de nascimento: ${titular.DataNascimento.toLocaleDateString()}\n`
            impressao += `     - Data de cadastro: ${titular.DataCadastro.toLocaleDateString()}\n`
        }

        impressao += `\n****************************`
        return impressao
    }
}
