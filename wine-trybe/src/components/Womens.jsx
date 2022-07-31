import { womanApi } from "../services/apiWine";
import "../style/WomensCard.css";

export default function Womens() {
  return (
    <div>
      <div className="title-img-container">
        <h2 className="title-womens">Uma seção dedicada a ELAS...</h2>
        <div className="img-womens-container">
          <img
            src="https://i0.wp.com/www.wine.com.br/winepedia/wp-content/uploads/2021/12/vinhos-mulheres.png?resize=1024%2C628&ssl=1"
            alt="mulheres brindando"
            className="img-womens"
          ></img>
        </div>
      </div>

      <div className="woman-container">
        {womanApi.map((wine) => (
          <div key={wine.id} className="card-woman-container">
            <h2 className="wine-title">{wine.title}</h2>
            <div className="text-pic-container">
              <img src={wine.image} alt={wine.title} className="wine-picture" />
              <p className="wine-text">{wine.comment}</p>
            </div>
            <div className="price-container">
              <div className="socio-container">
                <p>SÓCIO WINE: R$</p>
                <p className="wine-price-socio">
                  {wine.priceMember.toFixed(2)}
                </p>
                <div className="btt-add">
                  <button type="button" className="btt-style">
                    Adicionar
                  </button>
                </div>
              </div>
              <div className="nao-socio-container">
                <p>NÃO SÓCIO: R$</p>
                <p className="wine-price-nao-socio">
                  {wine.priceNmember.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
