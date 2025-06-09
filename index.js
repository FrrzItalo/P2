 const Produto = require('.produto');
const Cliente = require('.cliente');
const PedidoFactory = require('./PedidoFactory');
const {
  DescontoPorCategoria,
  DescontoPorQuantidade
} = require('.descontos');

// Criação dos produtos
const produto1 = new Produto(1, 'Camisa', 50, 'Roupas');
const produto2 = new Produto(2, 'Calça', 100, 'Roupas');
const produto3 = new Produto(3, 'Livro', 30, 'Livros');

// Criação do cliente
const cliente = new Cliente(1, 'João Silva', 'joao@email.com', '12345678900');

// Criação do pedido
const produtosPedido = [produto1, produto2, produto3];
const pedido = PedidoFactory.criarPedido(1, cliente, produtosPedido, new Date());

console.log('\n===== DETALHES DO PEDIDO =====');
console.log(`Cliente: ${pedido.cliente.nome}`);
console.log(`Data: ${pedido.data.toLocaleDateString()}`);
console.log(`Produtos:`);

pedido.produtos.forEach((p, i) => {
  console.log(`  ${i + 1}. ${p.nome} - R$${p.preco} (${p.categoria})`);
});

console.log(`Valor total sem desconto: R$${pedido.valorTotal.toFixed(2)}`);

// Aplicação de estratégias de desconto
const descontoCategoria = new DescontoPorCategoria('Roupas', 10); // R$10 por item da categoria "Roupas"
const descontoQuantidade = new DescontoPorQuantidade(3, 15); // R$15 se tiver 3 ou mais produtos

const totalDesconto = descontoCategoria.aplicar(produtosPedido) + descontoQuantidade.aplicar(produtosPedido);
const valorComDesconto = pedido.valorTotal - totalDesconto;

console.log(`Desconto total aplicado: R$${totalDesconto.toFixed(2)}`);
console.log(`Valor final com desconto: R$${valorComDesconto.toFixed(2)}`);
console.log('==============================\n');
