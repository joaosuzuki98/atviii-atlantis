import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import verificaCliente from "../utils/verificaCliente"

export default class ExcluirClienteDependente extends Processo {
    processar(): void {
        console.log('Excluindo dependente...')

        let doc = this.entrada.receberTexto('Digite o número de qualquer documento do dependente:')
        let armazem = Armazem.InstanciaUnica
        let dependente = verificaCliente(armazem.Clientes, doc)

        if (!dependente) {
            console.log('Dependente não encontrado.')
            return
        }

        if (!dependente.Titular) {
            console.log('O cliente informado não é um dependente.')
            return
        }

        let index = armazem.Clientes.findIndex(cliente => cliente === dependente)
        if (index !== -1) {
            armazem.Clientes.splice(index, 1)
        }

        let titular = dependente.Titular
        titular.Dependentes = titular.Dependentes.filter(dep => dep !== dependente)

        console.log('Dependente excluído com sucesso.')
    }
}
