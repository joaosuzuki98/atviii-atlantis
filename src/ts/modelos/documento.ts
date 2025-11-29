import { TipoDocumento } from "../enumeracoes/TipoDocumento"

export default class Documento {
    private numero: string
    private tipo: TipoDocumento
    private dataExpedicao: Date

    constructor(numero: string, tipo: TipoDocumento, dataExpedicao: Date) {
        this.numero = numero
        this.tipo = tipo
        this.dataExpedicao = dataExpedicao
    }

    public get Numero(){
        return this.numero
    }
    public get Tipo(){
        return this.tipo
    }
    public get DataExpedicao(){
        return this.dataExpedicao
    }

    public set SetNumero(numero: string) {
        this.numero = numero
    }

    public set SetTipo(tipo: TipoDocumento) {
        this.tipo = tipo
    }
    
    public set SetDataExpedicao(dataExpedicao: Date) {
        this.dataExpedicao = dataExpedicao
    }
}