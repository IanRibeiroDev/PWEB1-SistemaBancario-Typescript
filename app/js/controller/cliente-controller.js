class ClienteController {
    constructor() {
        this.inputNome =
            document.querySelector("#nome");
        this.inputCpf =
            document.querySelector("#cpf");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value);
        this.clientes.inserir(novoCliente);
        console.log("Inserido com sucesso!");
    }
    listar(evento) {
        evento.preventDefault();
        console.log(this.clientes.listar());
    }
    pesquisar(evento) {
        evento.preventDefault();
        console.log(this.clientes.pesquisar(this.inputCpf.value));
    }
    remover(evento) {
        evento.preventDefault();
        this.clientes.remover(this.inputCpf.value);
        console.log("Removido com sucesso!");
    }
}
