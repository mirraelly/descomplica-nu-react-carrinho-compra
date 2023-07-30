import { useEffect, useState } from 'react';
import { carregarCarrinho } from './funcoes';

export default function Carrinho() {

    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        const carrinho = carregarCarrinho();

        setCarrinho(carrinho);
    }, []);

    const valorTotal = carrinho.map(e => e.quantidade * e.valor).reduce((v, e) => v + e, 0);

    return (

        <div className='container'>
            <h1>Carrinho</h1>
            {carrinho.map((e, index) => (

                <div className="card mb-3" key={index}>
                    <div className="row g-0 align-items-center text-center">
                        <div className="col-md-2">
                            <img src={'produto-' + e.id + '.jpg'} className="img-fluid rounded-start compra" alt="" />
                        </div>
                        <div className="col-md-6 text-start">
                            <div className="card-body">
                                <h5 className="card-title">{e.nome}</h5>
                                <p className="card-text">{e.descricao}</p>
                            </div>
                        </div>
                        <div className="col-md-2">{e.quantidade}
                        </div>
                        <div className="col-md-2">
                            R$ {(e.valor * e.quantidade).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                    </div>
                </div>
            ))}
            <div className='d-flex justify-content-end mb-3 fw-bold'>
                Total da compra: R$ {valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>

            <div className='d-flex justify-content-end'>
                <button className='btn btn-primary'>Comprar</button>
            </div>
        </div>
    )
}