import React from "react";
import "../style/Footer.css";
import logoWine from "../images/wineLogo.png";

function Footer() {
  return (
    <div className="Footer">
      <h4 className="title">Seja sócio! Confira os benefícios: </h4>
      <div className="divCards">
        <div className="card1">15% OFF em todas as compras na Wine</div>
        <div className="card2">3x mais cashback pelo WineUP</div>
        <div className="card3">Taxa de entrega diferenciada</div>
        <div className="card4">Brindes e cupons no Indique Amigos</div>
      </div>
      <div className="infosWine">
        <img src={logoWine} alt="logoWine" />
          <h6 className="footer-text">
            W2W E-Commerce de Vinhos S.A CNPJ: 09.813.204/0002-05
          </h6>
          <h6 className="footer-text">
            Rua Comendador Alcides Simão Helou, 1478 Serra - ES - CEP 29168-090
          </h6>
      </div>
    </div>
  );
}

export default Footer;
