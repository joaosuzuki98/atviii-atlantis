import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import verificaCliente from "../utils/verificaCliente";
import EditarDocumentoCliente from "./editarDocumentosCliente";
import EditarEnderecoCliente from "./editarEnderecoCliente";
import EditarTelefoneCliente from "./editarTelefoneCliente";

export default class EditarClienteTitular extends Processo {
    processar(): void {
        console.log('Editando cliente...')

        let doc = this.entrada.receberTexto('Digite o número de qualquer documento cadastrado:')
        let armazem = Armazem.InstanciaUnica
        let titular = verificaCliente(armazem.Clientes, doc)

        if (!titular) {
            console.log('Titular não encontrado')
            return 
        }        
        console.log('Deixe em branco caso não queira mudar')
        let nome = this.entrada.receberTexto('Qual o novo nome do cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o novo nome social do cliente?')
        let dataNascimento = this.entrada.receberData('Qual a nova data de nascimento do cliente (se não quiser mudar, coloque a mesma data)?')

        if (nome) titular.Nome = nome
        if (nomeSocial) titular.NomeSocial = nomeSocial
        if (dataNascimento) titular.DataNascimento = dataNascimento

        let editarDoc = this.entrada.receberTexto('Deseja editar algum documento? (s/n)').toLowerCase()
        if (editarDoc === 's') {
            let editarDocumento = new EditarDocumentoCliente(titular)
            editarDocumento.processar()
        }

        let editarEndereco = this.entrada.receberTexto('Deseja editar o endereço? (s/n)').toLowerCase()
        if (editarEndereco === 's') {
            let editarEnderecoCliente = new EditarEnderecoCliente(titular)
            editarEnderecoCliente.processar()
        }

        let editarTelefones = this.entrada.receberTexto('Deseja editar os telefones? (s/n)').toLowerCase()
        if (editarTelefones === 's') {
            let editarTelefoneCliente = new EditarTelefoneCliente(titular)
            editarTelefoneCliente.processar()
        }

        console.log('Finalizando o cadastro do cliente...')
    }
}