import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import verificaCliente from "../utils/verificaCliente"
import ImpressorDependentesPorTitular from "../impressores/impressorDependentesPorTitular"

export default class ListagemDependentesPorTitulares extends Processo {
    processar(): void {
        console.clear()
        console.log('Listar dependentes de um titular')

        const doc = this.entrada.receberTexto('Digite o número de um documento do titular:')
        const armazem = Armazem.InstanciaUnica
        const cliente = verificaCliente(armazem.Clientes, doc)

        if (!cliente) {
            console.log('Cliente não encontrado')
            return
        }

        if (cliente.Titular !== undefined) {
            console.log('Este cliente não é um titular')
            return
        }

        const impressor = new ImpressorDependentesPorTitular(cliente)
        console.log(impressor.imprimir())
    }
}
