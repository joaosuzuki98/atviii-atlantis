import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import verificaCliente from "../utils/verificaCliente";

export default class EdicaoHospedagem extends Processo {
    private armazem: Armazem

    constructor() {
        super()
        this.armazem = Armazem.InstanciaUnica
    }

    processar(): void {
        console.log('Iniciando edição de hospedagem...')
        const clienteDoc = this.entrada.receberTexto('Digite o número de qualquer documento do cliente:')
        const cliente = verificaCliente(this.armazem.Clientes, clienteDoc)

        if (!cliente) {
            console.log('Cliente não encontrado.')
            return
        }

        const hospedagensCliente = this.armazem.Hospedagem.filter(h => h.Cliente === cliente)

        if (hospedagensCliente.length === 0) {
            console.log('Esse cliente não possui hospedagens.')
            return
        }

        hospedagensCliente.forEach((hosp, index) => {
            console.log(`${index + 1}. Acomodação: ${hosp.AcomodacaoTipo}, De: ${hosp.DataInicio.toLocaleDateString()} até ${hosp.DataFim.toLocaleDateString()}`)
        })

        const escolha = this.entrada.receberNumero('Digite o número da hospedagem que deseja editar:')
        const hospedagem = hospedagensCliente[escolha - 1]

        if (!hospedagem) {
            console.log('Hospedagem não encontrada.')
            return
        }

        console.log('1. Alterar acomodação')
        console.log('2. Alterar datas')
        const opcao = this.entrada.receberNumero('Digite a opção desejada:')

        switch (opcao) {
            case 1:
                console.log('Opções de acomodação:')
                Object.entries(NomeAcomadacao).forEach(([key, value], i) => {
                    console.log(`${i + 1}. ${value}`)
                })

                const novaAcomod = this.entrada.receberNumero('Digite o número da nova acomodação:')
                const valoresEnum = Object.values(NomeAcomadacao)
                if (valoresEnum[novaAcomod - 1]) {
                    hospedagem.AcomodacaoTipo = valoresEnum[novaAcomod - 1]
                    console.log('Acomodação atualizada com sucesso!')
                } else {
                    console.log('Opção inválida.')
                }
                break

            case 2:
                const novaDataInicio = this.entrada.receberData('Digite a nova data de início:')
                const novaDataFim = this.entrada.receberData('Digite a nova data de fim:')
                hospedagem.DataInicio = novaDataInicio
                hospedagem.DataFim = novaDataFim
                console.log('Datas atualizadas com sucesso!')
                break

            default:
                console.log('Opção inválida.')
        }

        console.log('Edição finalizada.')
    }
}
