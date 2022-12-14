import React, { useEffect, useState } from "react";
import { apiPlans } from "../services/api";
import "../style/PlanCard.css";

export default function Plans() {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    apiPlans
      .get("/modalities")
      .then((response) => setPlans(response.data[0].plans))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    console.log(plans);
  });

  return (
    <div className="plans">
      <div className="plans-title">
        <h3> WineBox </h3>
        <h1> Essenciais </h1>
        <p>
          {" "}
          Rótulos descomplicados, perfeitos para quem está começando a desbravar
          o mundo do vinho!
        </p>
      </div>

      <div className="plans-cards">
        {plans.length > 0
          ? plans.map((plan) => (
              <div className="plan-card" key={plan.id}>
                <div className="title-card">
                  <h2 className="title-text-card"> {plan.name} </h2>
                  <button className="promocao">{plan.promotion}</button>
                </div>

                <div className="plan-price">
                  <p> De R$ {plan.price.toFixed(2)} por </p>
                  <h1 className="price-discount"> R$ {plan.priceWithDiscount} </h1>
                  <div>
                    <p>
                      {" "}
                      {plan.name === "Plano Anual"
                        ? ` você economiza R$ ${(
                            plan.price - plan.priceWithDiscount
                          ).toFixed(2)} por ano!`
                        : `você economiza R$ ${(
                            plan.price - plan.priceWithDiscount
                          ).toFixed(2)} por mês!`}
                    </p>
                  </div>
                </div>
                <div className="footer-card">
                  <div className="brinde">
                    {plan.gift === null
                      ? "Nenhum brinde"
                      : `Brinde: ${plan.gift}`}
                  </div>
                  <button className="assine"> Assinar {plan.name} </button>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
