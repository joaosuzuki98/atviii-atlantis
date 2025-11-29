import Processo from "../abstracoes/processo";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
import ListagemDependentesPorTitulares from "./listagemDependentesPorTitulares";
import ListagemTitulares from "./listagemTitulares";
import ListagemtitularPorDependente from "./listagemTitularPorDependente";

export default class TipoListagemClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoListagemClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break;
            case 2:
                this.processo = new ListagemDependentesPorTitulares()
                this.processo.processar()
                break
            case 3:
                this.processo = new ListagemtitularPorDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida... :(')
        }
    }
}