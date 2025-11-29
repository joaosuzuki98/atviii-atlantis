import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import verificaCliente from "../utils/verificaCliente"
import ImpressorTitularPorDependente from "../impressores/impressorTitularPorDependente"

export default class ListagemtitularPorDependente extends Processo {
    processar(): void {
        console.clear()
        console.log('Buscar titular de um dependente')

        const doc = this.entrada.receberTexto('Digite o número de um documento do dependente:')
        const armazem = Armazem.InstanciaUnica
        const dependente = verificaCliente(armazem.Clientes, doc)

        if (!dependente) {
            console.log('Cliente não encontrado')
            return
        }

        if (!dependente.Titular) {
            console.log('Este cliente não possui titular (provavelmente é ele próprio o titular)')
            return
        }

        const impressor = new ImpressorTitularPorDependente(dependente)
        console.log(impressor.imprimir())
    }
}
