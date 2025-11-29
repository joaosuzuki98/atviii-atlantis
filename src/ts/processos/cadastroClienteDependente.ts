import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import Cliente from "../modelos/cliente"
import Endereco from "../modelos/endereco"
import Telefone from "../modelos/telefone"
import verificaCliente from "../utils/verificaCliente"
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente"

export default class CadastroClienteDependente extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo dependente...')

        let doc = this.entrada.receberTexto('Digite o número de qualquer documento cadastrado do titular:')
        let armazem = Armazem.InstanciaUnica
        let titular = verificaCliente(armazem.Clientes, doc)

        if (!titular) {
            console.log('Titular não encontrado')
            return 
        }
        
        let nome = this.entrada.receberTexto('Qual o nome do novo dependente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo dependente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let dependente = new Cliente(nome, nomeSocial, dataNascimento)

        dependente.Endereco = titular.Endereco.clonar() as Endereco
        dependente.setTelefone(titular.Telefones.map(telefone => telefone.clonar() as Telefone))
        dependente.Titular = titular

        this.processo = new CadastrarDocumentosCliente(dependente)
        this.processo.processar()

        armazem.Clientes.push(dependente)
        titular.Dependentes.push(dependente)

        console.log('Finalizando o cadastro do dependente...')
    }
}
