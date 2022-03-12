import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Withdraw() {
  const [amount, setAmount] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const adminUser = JSON.parse(localStorage.getItem("user"));
  const localData = JSON.parse(localStorage.getItem("data"));
  const submitHandler = (e) => {
    e.preventDefault();
    debugger;
    if (parseInt(amount) <= 5000.0) {
      let updatedData = localData.map((item) => {
        if (item.email === adminUser.email) {
          return { ...item, balance: item.balance - parseInt(amount) };
        } else {
          return item;
        }
      });
      localStorage.setItem("data", JSON.stringify(updatedData));

      setSuccess(false);
    } else {
      alert("Maximum çekilebilir tutar 5.000");
    }
    setSuccess(true);
  };

  return (
    <div className="deposit">
      <div className="deposit__wrap">
        {success ? (
          <div className="deposit__success">
            <div>Successful Withdrawal </div>
            <button
              className="button button--back"
              onClick={() => {
                setSuccess(false);
                navigate("/withdraw");
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
    </div>
  );
}

export default Withdraw;
