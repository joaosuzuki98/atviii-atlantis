"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const diretorSolteiroSimples_1 = __importDefault(require("../diretores/diretorSolteiroSimples"));
const diretorCasalSimples_1 = __importDefault(require("../diretores/diretorCasalSimples"));
const diretorFamiliaSimples_1 = __importDefault(require("../diretores/diretorFamiliaSimples"));
const diretorFamiliaMais_1 = __importDefault(require("../diretores/diretorFamiliaMais"));
const diretorFamiliaSuper_1 = __importDefault(require("../diretores/diretorFamiliaSuper"));
const diretorSolteiroMais_1 = __importDefault(require("../diretores/diretorSolteiroMais"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
class CadastroAcomodacoes extends processo_1.default {
    constructor() {
        super();
        this.acomodacoes = armazem_1.default.InstanciaUnica.Acomodacoes;
    }
    processar() {
        let diretores = [
            new diretorSolteiroSimples_1.default(),
            new diretorCasalSimples_1.default(),
            new diretorFamiliaSimples_1.default(),
            new diretorFamiliaMais_1.default(),
            new diretorFamiliaSuper_1.default(),
            new diretorSolteiroMais_1.default()
        ];
        for (const diretor of diretores) {
            this.acomodacoes.push(diretor.construir());
        }
    }
}
exports.default = CadastroAcomodacoes;
