import { useEffect, useState } from 'react';
import { carregarCarrinho } from './funcoes';

export default function Produtos() {

    const [carrinho, setCarrinho] = useState(carregarCarrinho());
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetchProdutos();
    }, []);

    useEffect(() => {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }, [carrinho]);

    const fetchProdutos = async () => {
        const res = await fetch('produtos.json');
        const produtos = await res.json();

        setProdutos(produtos);
    };

    const addProduto = (e) => {
        const index = carrinho.findIndex((produto) => (produto.id === e.id));

        if (index < 0) {
            setCarrinho([
                ...carrinho,
                { ...e, quantidade: 1 }
            ]);
        } else {
            const produto = carrinho[index];

            produto.quantidade++;
            setCarrinho([...carrinho]);
        }

    };

    return (
        <>
            <div className='container'>
                <h1>Lista de Produtos</h1>
                <div className='d-flex grid gap-0 row-gap-2 column-gap-4'>
                    {produtos.map((e) => {
                        return (
                            <div key={e.id} className="card col-6">
                                <img src={'produto-' + e.id + '.jpg'} alt={e.descricao} className="card-img-top vitrine" />
                                <div className="card-body">
                                    <h5 className="card-title"> {e.nome}</h5>
                                    <p className="card-text">{e.descricao}</p>
                                    <p className="card-text text-success fw-bold">
                                            R$ {e.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                    </p>
                                    <button className='btn btn-primary' onClick={() => addProduto(e)}>Adicionar</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </ >
    );
}