
import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Bem-vindo à nossa Loja de Eletrônicos</h1>
      <p>Encontre os melhores aparelhos eletrônicos aqui.</p>

      <div className="promotions">
        <div className="promotion">
          <img 
            src=" /smartphone-samsung-a04e-64gb-13mb-dual-chip-1.webp"
            alt="Produto em promoção 1"
          />
          <div className="promotion-info">
            <h2>Smartphone Top de Linha</h2>
            <p>Modelo: ABC-123</p>
            <p>Preço: R$ 1.299,99</p>
            <button>Comprar Agora</button>
          </div>
        </div>
        <div className='separador'></div>
        <div className="promotion">
          <img 
            src="/tv.webp"
            alt="Produto em promoção 2"
          />
          <div className="promotion-info">
            <h2>TV Ultra HD 4K</h2>
            <p>Modelo: XYZ-456</p>
            <p>Preço: R$ 2.499,99</p>
            <button>Comprar Agora</button>
          </div>
        </div>
      </div>

      </div>
    
  );
}
