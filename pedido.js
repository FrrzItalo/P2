class pedido {
    constructor(id, nome, produto, data) {
        this.id = id;
        this.cliente = this.cliente;
        this.produto = produto;
        this.data = data;
        this.valorTotal = this.calculaTotal();
    }

    calculaTotal() {
        return this.produtos.reduce((total, produto) => total + produto.preco, 0);
    }
} 

module.exports = pedido;
