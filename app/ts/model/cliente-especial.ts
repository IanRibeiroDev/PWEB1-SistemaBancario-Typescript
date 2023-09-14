class ClienteEspecial extends Cliente {
    private _dependentes: Array<Cliente>;

    constructor(nome: string, cpf: string) {
        super(nome, cpf);
        this._dependentes = [];
    }

    inserirDependente(dependente: Cliente): void {
        this._dependentes.push(dependente);
    }

    removerDependente(cpf: string): void {
        const dependente: Array<Cliente> = this._dependentes.filter(dependente => dependente.cpf == cpf);
        if (dependente.length < 1) {
            throw new Error("Dependente inexistente.");
        }

        const indice: number = this._dependentes.indexOf(dependente[0]);
        this._dependentes.splice(indice, 1);
    }

    pesquisarDependente(cpf: string) : Cliente {
        const dependente: Array<Cliente> = this._dependentes.filter(dependente => dependente.cpf == cpf);
        if (dependente.length < 1) {
            throw new Error("Cliente inexistente.");
        }

        return dependente[0];
    }

    listarDependentes(): Array<Cliente> {
        return this._dependentes;
    }
}