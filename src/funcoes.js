

export const carregarCarrinho = () => {
    return JSON.parse(localStorage.getItem('carrinho') || '[]');
}
