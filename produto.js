 class Produto {
    constructor(id, nome, preco, categoria) {
        if (preco <= 0) {
            throw new Error("Preço inválido. Deve ser maior que zero.");
        }

        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
 }

 module.exports = Produto;
