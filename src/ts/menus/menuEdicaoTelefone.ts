import Menu from "../interfaces/menu"

export default class MenuEdicaoTelefone implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| O que deseja fazer com telefones? `)
        console.log(`----------------------`)
        console.log(`| 1 - Editar um telefone`)
        console.log(`| 2 - Adicionar um telefone`)
        console.log(`| 3 - Excluir um telefone`)
        console.log(`| 0 - Finalizar edição de telefones`)
        console.log(`----------------------`)
    }
}
