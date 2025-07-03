import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import verificaCliente from "../utils/verificaCliente"

export default class ExcluirHospedagem extends Processo {
    processar(): void {
        console.log('Excluindo hospedagem...')

        let doc = this.entrada.receberTexto('Digite o número de qualquer documento do cliente:')
        let armazem = Armazem.InstanciaUnica
        let cliente = verificaCliente(armazem.Clientes, doc)

        if (!cliente) {
            console.log('Cliente não encontrado')
            return
        }

        let hospedagensDoCliente = armazem.Hospedagem.filter(h => h.Cliente === cliente)

        if (hospedagensDoCliente.length === 0) {
            console.log('Esse cliente não possui hospedagens.')
            return
        }

        hospedagensDoCliente.forEach((hosp, index) => {
            console.log(`${index + 1}. Acomodação: ${hosp.AcomodacaoTipo}, De: ${hosp.DataInicio.toLocaleDateString()} até ${hosp.DataFim.toLocaleDateString()}`)
        })

        let escolha = this.entrada.receberNumero('Digite o número da hospedagem que deseja excluir:')
        let hospedagemSelecionada = hospedagensDoCliente[escolha - 1]

        if (!hospedagemSelecionada) {
            console.log('Hospedagem inválida.')
            return
        }

        let index = armazem.Hospedagem.findIndex(h => h === hospedagemSelecionada)

        if (index !== -1) {
            armazem.Hospedagem.splice(index, 1)
            console.log('Hospedagem excluída com sucesso.')
        } else {
            console.log('Hospedagem não encontrada para exclusão.')
        }
    }
}
