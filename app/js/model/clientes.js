class Clientes {
    constructor() {
        this._listaClientes = [];
    }
    inserir(cliente) {
        this._listaClientes.push(cliente);
    }
    remover(cpf) {
        const cliente = this._listaClientes.filter(cliente => cliente.cpf == cpf);
        if (cliente.length < 1) {
            throw new Error("Cliente inexistente.");
        }
        const indice = this._listaClientes.indexOf(cliente[0]);
        this._listaClientes.splice(indice, 1);
    }
    listar() {
        return this._listaClientes;
    }
    pesquisar(cpf) {
        const cliente = this._listaClientes.filter(cliente => cliente.cpf == cpf);
        if (cliente.length < 1) {
            throw new Error("Cliente inexistente.");
        }
        return cliente[0];
    }
}
