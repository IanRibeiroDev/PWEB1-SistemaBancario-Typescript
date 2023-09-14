class Clientes {
    private _listaClientes: Array<Cliente>;

    constructor() {
        this._listaClientes = [];
    }

    inserir(cliente: Cliente): void {
        this._listaClientes.push(cliente);
    }

    remover(cpf: string): void {
        const cliente: Array<Cliente> = this._listaClientes.filter(cliente => cliente.cpf == cpf);
        if (cliente.length < 1) {
            throw new Error("Cliente inexistente.");
        }

        const indice: number = this._listaClientes.indexOf(cliente[0]);
        this._listaClientes.splice(indice, 1);
    }

    listar(): Array<Cliente> {
        return this._listaClientes;
    }

    pesquisar(cpf: string): Cliente {
        const cliente: Array<Cliente> = this._listaClientes.filter(cliente => cliente.cpf == cpf);
        if (cliente.length < 1) {
            throw new Error("Cliente inexistente.");
        }

        return cliente[0];
    }
}