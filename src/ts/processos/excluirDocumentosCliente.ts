import Processo from "../abstracoes/processo"
import Cliente from "../modelos/cliente"

export default class ExcluirDocumentoCliente extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        const documentos = this.cliente.Documentos;

        if (documentos.length === 0) {
            console.log('Cliente não possui documentos cadastrados.')
            return
        }

        let numeroDoc = this.entrada.receberTexto('Digite o número do documento que deseja excluir:')
        let index = documentos.findIndex(doc => doc.Numero === numeroDoc)

        if (index === -1) {
            console.log('Documento não encontrado.')
            return
        }

        documentos.splice(index, 1)
        console.log('Documento excluído com sucesso!')
    }
}
