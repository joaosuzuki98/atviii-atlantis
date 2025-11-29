import Menu from "../interfaces/menu";

export default class MenuTelefone implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Cadestre seus números de telefone `)
        console.log(`----------------------`)
        console.log(`| 1 - Cadastro de telefone`)
        console.log(`| 0 - Finalizar cadastro de telefones`)
        console.log(`----------------------`)
    }
}