import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import verificaCliente from "../utils/verificaCliente"
import EditarDocumentoCliente from "./editarDocumentosCliente"

export default class EditarClienteDependente extends Processo {
    processar(): void {
        console.log('Editando dependente...')

        let doc = this.entrada.receberTexto('Digite o número de qualquer documento do dependente:')
        let armazem = Armazem.InstanciaUnica
        let dependente = verificaCliente(armazem.Clientes, doc)

        if (!dependente || !dependente.Titular) {
            console.log('Dependente não encontrado ou não é um dependente.')
            return
        }

        console.log('Deixe em branco caso não queira mudar.')

        let nome = this.entrada.receberTexto('Novo nome:')
        let nomeSocial = this.entrada.receberTexto('Novo nome social:')
        let dataNascimento = this.entrada.receberData('Nova data de nascimento:')

        if (nome) dependente.Nome = nome
        if (nomeSocial) dependente.NomeSocial = nomeSocial
        if (dataNascimento) dependente.DataNascimento = dataNascimento

        let editarDoc = this.entrada.receberTexto('Deseja editar algum documento? (s/n)').toLowerCase()
        if (editarDoc === 's') {
            let editarDocumento = new EditarDocumentoCliente(dependente)
            editarDocumento.processar()
        }

        console.log('Edição finalizada.')
    }
}
