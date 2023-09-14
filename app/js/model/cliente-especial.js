class ClienteEspecial extends Cliente {
    constructor(nome, cpf) {
        super(nome, cpf);
        this._dependentes = [];
    }
    inserirDependente(dependente) {
        this._dependentes.push(dependente);
    }
    removerDependente(cpf) {
        const dependente = this._dependentes.filter(dependente => dependente.cpf == cpf);
        if (dependente.length < 1) {
            throw new Error("Dependente inexistente.");
        }
        const indice = this._dependentes.indexOf(dependente[0]);
        this._dependentes.splice(indice, 1);
    }
    pesquisarDependente(cpf) {
        const dependente = this._dependentes.filter(dependente => dependente.cpf == cpf);
        if (dependente.length < 1) {
            throw new Error("Cliente inexistente.");
        }
        return dependente[0];
    }
    listarDependentes() {
        return this._dependentes;
    }
}
