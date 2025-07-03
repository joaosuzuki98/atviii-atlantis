import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorHospedagens from "../impressores/impressorHospedagens";
import Impressor from "../interfaces/impressor";
import Hospedagem from "../modelos/hospedagem";

export default class ListagemHospedagens extends Processo {
    private hospedagens: Hospedagem[]
    private impressor!: Impressor
    constructor() {
        super()
        this.hospedagens = Armazem.InstanciaUnica.Hospedagem
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem das Hospedagens...')
        console.log(`-------------------------------------------------`)
        this.hospedagens.forEach(hospedagem => {
            this.impressor = new ImpressorHospedagens(hospedagem)
            console.log(this.impressor.imprimir())
            console.log(`-------------------------------------------------`)
        })
    }
}