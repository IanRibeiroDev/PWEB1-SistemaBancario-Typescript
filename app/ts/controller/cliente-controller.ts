class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;

    private clientes: Clientes;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome")
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this.clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value,
            this.inputCpf.value);

        this.clientes.inserir(novoCliente);
        console.log("Inserido com sucesso!");
    }

    listar(evento: Event) {
        evento.preventDefault();
        console.log(this.clientes.listar())
    }

    pesquisar(evento: Event) {
        evento.preventDefault();
        console.log(this.clientes.pesquisar(this.inputCpf.value));
    }

    remover(evento: Event) {
        evento.preventDefault();
        this.clientes.remover(this.inputCpf.value);
        console.log("Removido com sucesso!");
    }
}
