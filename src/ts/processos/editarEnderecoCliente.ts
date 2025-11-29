import Processo from "../abstracoes/processo"
import Cliente from "../modelos/cliente"
import Endereco from "../modelos/endereco"

export default class EditarEnderecoCliente extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        const endereco = this.cliente.Endereco

        console.log('Deixe em branco se não quiser alterar um campo.')

        let rua = this.entrada.receberTexto(`Rua atual: ${endereco.Rua} | Nova rua:`)
        let bairro = this.entrada.receberTexto(`Bairro atual: ${endereco.Bairro} | Novo bairro:`)
        let cidade = this.entrada.receberTexto(`Cidade atual: ${endereco.Cidade} | Nova cidade:`)
        let estado = this.entrada.receberTexto(`Estado atual: ${endereco.Estado} | Novo estado:`)
        let pais = this.entrada.receberTexto(`País atual: ${endereco.Pais} | Novo país:`)
        let codigoPostal = this.entrada.receberTexto(`Código postal atual: ${endereco.CodigoPostal} | Novo código postal:`)

        const novoEndereco = new Endereco(
            rua || endereco.Rua,
            bairro || endereco.Bairro,
            cidade || endereco.Cidade,
            estado || endereco.Estado,
            pais || endereco.Pais,
            codigoPostal || endereco.CodigoPostal
        )

        this.cliente.Endereco = novoEndereco

        this.cliente.Dependentes.forEach(dep => {
            dep.Endereco = novoEndereco.clonar() as Endereco
        })

        console.log('Endereço atualizado com sucesso!')
    }
}
