const pedido = require('./pedido');

class PedidoFactory {
    static criarPedido(id, cliente, produtos, data) {
        return new pedido(id, cliente, produtos, data);
    }
}

module.exports = PedidoFactory;