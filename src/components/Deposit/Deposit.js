import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Deposit() {
  const [amount, setAmount] = useState(Number);
  const [succes, setSucces] = useState(false);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const localData = JSON.parse(localStorage.getItem("data"));
  const submitHandler = (e) => {
    e.preventDefault();
    if (amount <= 50000.0 && amount > 0 && typeof amount == "number") {
      let updateUserData = localData.map((user) => {
        if (user.email === currentUser.email) {
          return { ...user, balance: user.balance + parseInt(amount) };
        } else {
          return user;
        }
      });
      localStorage.setItem("data", JSON.stringify(updateUserData));
      setSucces(true);
    } else {
      alert("Maximum yatırılacak tutar 50.000");
      setSucces(false);
    }
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
                  type="number"
                  id="name"
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  autoComplete="off"
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
