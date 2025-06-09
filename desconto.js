const Produto = require("./produto");

class DescontoStategy {
    aplicar(produtos) {
        return 0; //implementação base
    }
}

class DescontoPorCategoria extends DescontoStategy {
    constructor(cateoria, valorDesconto) {
        super();
        this.cateoria = cateoria;
        this.valorDesconto = valorDesconto;
    }

    aplicar(produtos) {
        let desconto = 0;
        produtos.forEach(Produto => {
            if (Produto.cateoria === this.categoria) {
                desconto += this.valorDesconto;
            }
        });
        return desconto;
    }
}

class DescontoPorQuantidade extends DescontoStategy {
    constructor(qtdMinima,  valorDesconto) {
        super();
        this.qtdMinima = qtdMinima;
        this.valorDesconto = valorDesconto;
    }
    aplicar(produto) {
        if (produtos.length >= this.qtdMinima) {
            return this.valorDesconto;
        }
        return 0;
    }
}


module.exports = {
    DescontoStategy,
    DescontoPorCategoria,
    DescontoPorQuantidade
};