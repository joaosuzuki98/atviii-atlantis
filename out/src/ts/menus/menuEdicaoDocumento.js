"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MenuEdicaoDocumento {
    mostrar() {
        console.clear();
        console.log(`****************************`);
        console.log(`| O que deseja fazer com documentos? `);
        console.log(`----------------------`);
        console.log(`| 1 - Editar um documento`);
        console.log(`| 2 - Adicionar um documento`);
        console.log(`| 3 - Excluir um documento`);
        console.log(`| 0 - Finalizar edição de documentos`);
        console.log(`----------------------`);
    }
}
exports.default = MenuEdicaoDocumento;
