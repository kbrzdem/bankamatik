import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Currency() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    buy: "",
    sell: "",
  });

  const getData = () => {
    axios
      .get("http://hasanadiguzel.com.tr/api/kurgetir")
      .then(function ({ data }) {
        setDetails({
          ...details,
          buy: data.TCMB_AnlikKurBilgileri[0].ForexBuying,
        });
        setDetails({
          ...details,
          sell: data.TCMB_AnlikKurBilgileri[0].ForexSelling,
        });
      })
      .catch(function (error) {
        console.log("hata");
      });
  };

  setInterval(() => {
    //getData();
  }, 6000);

  return (
    <section className="deposit">
      <div className="deposit__wrap">
        <div className="currency__table">
          <div>
            <span className="currency__desc">ABD Doları</span>
          </div>

          <div className="currency__buy-sell">
            <span className="currency__detail mr">
              BUY(TL) <p>{details.buy}</p>{" "}
            </span>
            <span className="currency__detail">
              SELL(TL) <p>{details.sell}</p>{" "}
            </span>
          </div>
        </div>
        <button
          className="button button--mr"
          onClick={() => {
            navigate("/home");
          }}
        >
          Back
        </button>
      </div>
    </section>
  );
}

export default Currency;
