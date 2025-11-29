import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import verificaCliente from "../utils/verificaCliente"

export default class ExcluirClienteTitular extends Processo {
    processar(): void {
        console.log('Excluindo cliente...')

        let doc = this.entrada.receberTexto('Digite o número de qualquer documento cadastrado:')
        let armazem = Armazem.InstanciaUnica
        let titular = verificaCliente(armazem.Clientes, doc)

        if (!titular) {
            console.log('Titular não encontrado')
            return 
        }
        
        let index = armazem.Clientes.findIndex(cliente => cliente.Documentos.some(documento => documento.Numero === doc))

        for (let dependente of titular.Dependentes) {
            let indexDep = armazem.Clientes.findIndex(cliente =>
                cliente === dependente
            )
            if (indexDep !== -1) {
                armazem.Clientes.splice(indexDep, 1)
            }
        }

        if (index !== -1) {
            armazem.Clientes.splice(index, 1)
            console.log('Cliente excluído com sucesso')
        } else {
            console.log('Cliente não encontrado para exclusão')
        }
    }
}