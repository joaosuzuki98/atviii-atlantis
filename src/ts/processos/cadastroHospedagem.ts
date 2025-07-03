import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import ImpressorAcomodacao from "../impressores/impressorAcomodacao";
import Impressor from "../interfaces/impressor";
import Hospedagem from "../modelos/hospedagem";
import verificaCliente from "../utils/verificaCliente";

export default class CadastroHospedagem extends Processo {
    private armazem: Armazem
    private impressor!: Impressor

    constructor() {
        super()
        this.armazem = Armazem.InstanciaUnica
    }
    processar(): void {
        console.log('Iniciando o cadastro de hospedagem...')
        let clienteDoc = this.entrada.receberTexto('Digite o número de qualquer documento do cliente:')
        let cliente = verificaCliente(this.armazem.Clientes, clienteDoc)

        if (!cliente) {
            console.log('Cliente não encontrado.')
            return
        }

        this.armazem.Acomodacoes.forEach((acomodacao, index) => {
            this.impressor = new ImpressorAcomodacao(acomodacao);
            console.log(`${index + 1}. ${this.impressor.imprimir()}`);
        })

        let acomodacaoEscolha = this.entrada.receberNumero('Digite o número da acomodação você deseja:')
        let acomodacaoTipo: NomeAcomadacao
        switch (acomodacaoEscolha) {
            case 1:
                acomodacaoTipo = NomeAcomadacao.SolteiroSimples
                break
            case 2:
                acomodacaoTipo = NomeAcomadacao.CasalSimples
                break
            case 3:
                acomodacaoTipo = NomeAcomadacao.FamilaSimples
                break
            case 4:
                acomodacaoTipo = NomeAcomadacao.FamiliaMais
                break
            case 5:
                acomodacaoTipo = NomeAcomadacao.FamiliaSuper
                break
            case 6:
                acomodacaoTipo = NomeAcomadacao.SolteiroMais
                break
            default:
                console.log('Não entendi a opção :B');
                return
        }

        let dataInicial = this.entrada.receberData('Digite a data inicial da reserva da hospedagem')
        let dataFinal = this.entrada.receberData('Digite a data final da reserva da hospedagem')

        let hospedagem = new Hospedagem(acomodacaoTipo, cliente, dataInicial, dataFinal)

        this.armazem.Hospedagem.push(hospedagem)

        console.log('Finalizando o cadastro da hospedagem...')
    }
}