import Processo from "../abstracoes/processo"
import MenuEdicaoTelefone from "../menus/menuEdicaoTelefone"
import Cliente from "../modelos/cliente"
import Telefone from "../modelos/telefone"
import CadastroTelefoneTitular from "./cadastrarTelefoneTitular"

export default class EditarTelefoneCliente extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuEdicaoTelefone()
        this.execucao = true
    }

    processar(): void {
        const telefones = this.cliente.Telefones

        if (telefones.length === 0) {
            console.log('Cliente não possui telefones cadastrados.')
            return
        }

        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Escolha uma opção:')

            switch (this.opcao) {
                case 1:
                    const numeroOriginal = this.entrada.receberTexto('Digite o número (somente os dígitos) do telefone que deseja editar:')
                    const telefoneExistente = telefones.find(tel => tel.Numero === numeroOriginal)

                    if (!telefoneExistente) {
                        console.log('Telefone não encontrado.')
                        break
                    }

                    const novoDdd = this.entrada.receberTexto('Novo DDD:')
                    const novoNumero = this.entrada.receberTexto('Novo número:')

                    if (novoDdd && novoNumero) {
                        telefoneExistente['ddd'] = novoDdd
                        telefoneExistente['numero'] = novoNumero
                        this.cliente.Dependentes.forEach(dep => {
                            dep.setTelefone(this.cliente.Telefones.map(t => t.clonar() as Telefone))
                        })
                        console.log('Telefone atualizado.')
                    }
                    break

                case 2:
                    this.processo = new CadastroTelefoneTitular(this.cliente)
                    this.processo.processar()

                    this.cliente.Dependentes.forEach(dep => {
                        dep.setTelefone(this.cliente.Telefones.map(t => t.clonar() as Telefone))
                    })

                    console.log('Telefone adicionado.')
                    break

                case 3:
                    const numeroRemover = this.entrada.receberTexto('Digite o número (somente os dígitos) do telefone que deseja remover:')
                    const indice = telefones.findIndex(tel => tel.Numero === numeroRemover)

                    if (indice !== -1) {
                        telefones.splice(indice, 1)
                        this.cliente.setTelefone(telefones)
                        this.cliente.Dependentes.forEach(dep => {
                            dep.setTelefone(this.cliente.Telefones.map(t => t.clonar() as Telefone))
                        })
                        console.log('Telefone removido.')
                    } else {
                        console.log('Telefone não encontrado.')
                    }
                    break

                case 0:
                    this.execucao = false
                    break

                default:
                    console.log('Não entendi a opção :B.')
            }
        }
    }
}
