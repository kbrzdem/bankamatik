import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Deposit() {
  const [amount, setAmount] = useState("");
  const [succes, setSucces] = useState(false);
  const navigate = useNavigate();
  const adminUser = JSON.parse(localStorage.getItem("user"));
  const localData = JSON.parse(localStorage.getItem("data"));
  const submitHandler = (e) => {
    e.preventDefault();
    if (parseInt(amount) <= 50000.0) {
      let updatedData = localData.map((item) => {
        if (item.email === adminUser.email) {
          return { ...item, balance: item.balance + parseInt(amount) };
        } else {
          return item;
        }
      });
      localStorage.setItem("data", JSON.stringify(updatedData));
      setSucces(false);
    } else {
      alert("Maximum yatırılacak tutar 50.000");
    }
    setSucces(true);
  };

  return (
    <section className="deposit">
      <div className="deposit__wrap">
        {succes ? (
          <div className="deposit__success">
            <div>Succesfull Deposit</div>
            <button
              className="button button--back"
              onClick={() => {
                setSucces(false);
                navigate("/deposit");
              }}
            >
              Back
            </button>
          </div>
        ) : (
          <form onSubmit={submitHandler}>
            <div className="deposit__form">
              <div className="form-group">
                <label htmlFor="name">Amount:</label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                />
              </div>
              <div>
                <button
                  className="button button--mr"
                  onClick={() => {
                    setSucces(false);
                    navigate("/home");
                  }}
                >
                  Back
                </button>
                <button className="button" type="submit">
                  Confirm
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default Deposit;
