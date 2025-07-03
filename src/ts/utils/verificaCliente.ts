import Cliente from "../modelos/cliente"

export default function verificaCliente(clientes: Cliente[], doc: String): Cliente | null {
    for (let cliente of clientes) {
        for (let documento of cliente.Documentos) {
            if (documento.Numero === doc) {
                return cliente
            }
        }
    }

    return null
}