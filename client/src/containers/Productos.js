import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductComponents/ProductCard";
import axios from "axios";

const Productos = () => {
  const [cards, setCards] = useState([]);

  const getCard = async () => {
    const URL = `http://45.55.54.86:5000/api/v1/productos?key=CoNtable2020`;
    await axios
      .get(URL)
      .then((res) => {
        setCards([...res.data]);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    getCard();
  }, []);

  const brandOptions = {
    1: "Tamayo",
    2: "&Tradition",
    3: "IKEA",
    8: "Troncoso",
  };
  const categoryOptions = {
    1: "Categoria 1",
    2: "Categoria 2",
    3: "Categoria 3",
  };

  return (
    <React.Fragment>
      {cards.map((card) => (
        <ProductCard
          id={card[0]}
          key={card[0]}
          name={card[1]}
          brand={brandOptions[card[2]]}
          category={categoryOptions[card[3]]}
          price={card[4]}
          description={card[5]}
        />
      ))}
    </React.Fragment>
  );
};

export default Productos;
