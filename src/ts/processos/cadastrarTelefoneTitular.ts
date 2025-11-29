import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";
import MenuTelefone from "../menus/menuTelefone";

export default class CadastroTelefoneTitular extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTelefone()
        this.execucao = true
    }

    processar(): void {
        console.log('Iniciando o cadastro de telefones...')
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção deseja?')
            switch (this.opcao){
                case 1:
                    let ddd = this.entrada.receberTexto('Qual o ddd?')
                    let numero = this.entrada.receberTexto('Qual o número?')
                    let telefone = new Telefone(ddd, numero)
                    this.cliente.Telefones.push(telefone)
                    break
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log('Opção não entendida :(')
            }

        }
    }

}