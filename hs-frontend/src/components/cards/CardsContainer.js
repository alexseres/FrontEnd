import React, { useEffect, useState } from "react";
import OneSet from "./OneSet";

const CardsContainer = (props) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    var test = props.cards["Classic"];
  }, [props.cards]);

  let content = (
    <div>
      <p>Loading...</p>
    </div>
  );

  if (!isLoading && props.cards["Classic"]) {
    var cardSets = {
      datas: [
        {
          name: "Classic",
          data: props.cards["Classic"]
            .slice(95, 180)
            .filter((card) => card.img),
        },
        {
          name: "Naxxramas",
          data: props.cards["Naxxramas"]
            .slice(30, 130)
            .filter((card) => card.img),
        },
        {
          name: "Hall of Fame",
          data: props.cards["Hall of Fame"].filter((card) => card.img),
        },
      ],
    };

    console.log(cardSets.datas[2][8]);

    content = cardSets.datas.map((oneDLC) => (
      <div key={oneDLC.name} className="oneSetOfCards" style={containerStyle}>
        <OneSet cardsOfTheDLC={oneDLC.data}></OneSet>
      </div>
    ));
  }

  return content;
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginTop: "20px",
  paddingTop: "20px",
};

export default CardsContainer;
