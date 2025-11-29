import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente"
import MenuEdicaoDocumento from "../menus/menuEdicaoDocumento";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import ExcluirDocumentoCliente from "./excluirDocumentosCliente";

export default class EditarDocumentoCliente extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuEdicaoDocumento()
        this.execucao = true
    }

    processar(): void {
        const documentos = this.cliente.Documentos

        if (documentos.length === 0) {
            console.log('Cliente não possui documentos cadastrados.')
            return
        }

        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (this.opcao){
                case 1:
                    let numeroDoc = this.entrada.receberTexto('Digite o número do documento que deseja editar:')
                    let documento = documentos.find(doc => doc.Numero === numeroDoc)
            
                    if (!documento) {
                        console.log('Documento não encontrado.')
                        return
                    }
            
                    console.log('Deixe em branco se não quiser alterar um campo.')
            
                    let novoNumero = this.entrada.receberTexto('Novo número do documento:')
                    let novaDataExpedicao = this.entrada.receberData('Nova data de expedição:')
            
                    if (novoNumero) documento.SetNumero = novoNumero
                    if (novaDataExpedicao) documento.SetDataExpedicao = novaDataExpedicao
                    break
                case 2:
                    let cadastrarDocumento = new CadastrarDocumentosCliente(this.cliente)
                    cadastrarDocumento.processar()
                    break
                case 3:
                    let excluirDocumento = new ExcluirDocumentoCliente(this.cliente)
                    excluirDocumento.processar()
                    break
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log('Não entendi a opção :B')
            }

    
            console.log('Documento atualizado com sucesso!')
        }
    }
}
