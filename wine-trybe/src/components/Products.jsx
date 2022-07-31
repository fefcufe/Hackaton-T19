import React, { useEffect, useState } from "react";
import { apiProducts } from "../services/api";
import "./Products.css";
// estamos aqui 
export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiProducts
      .get("/products?page=1&limit=5")
      .then((response) => setProducts(response.data.items))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="products">
      <h3 className="catalogos"> Catálogos - Vinhos </h3>
      <div
        className="d-flex flex-nowrap overflow-auto carousel-inner"
        role="listbox"
        style={{ gap: "10px" }}
      >
        <div className="btt-previousNext">
          <button className="left carousel-control btt-style" data-slide="prev">
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            ></span>
            <span className="sr-only"> Previous</span>
          </button>
        </div>
        {products.length > 0
          ? products.map(({ image, name, sommelierComment }, index) => (
              <div key={index} className="card-woman-container">
                <div>
                  <img src={image} alt={name} width="100" height="100" />
                </div>
              </div>
            ))
          : " "}
        <div className="btt-previousNext">
          <button
            className="right carousel-control btt-style"
            data-slide="next"
          >
            <span
              className="glyphicon glyphicon-chevron-right seta-slide"
              aria-hidden="true"
            ></span>
            <span classname="sr-only"> Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
