import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SendMoney() {
  const [amount, setAmount] = useState("");
  const [userName, setUserName] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const adminUser = JSON.parse(localStorage.getItem("user"));
  const localData = JSON.parse(localStorage.getItem("data"));
  const submitHandler = (e) => {
    e.preventDefault();
    if (adminUser.balance > 0 && adminUser.name !== userName) {
      let updatedData = localData.map((item) => {
        if (item.email === adminUser.email) {
          return { ...item, balance: item.balance - parseInt(amount) };
        }
        console.log("kbr", item.name);
        if (item.userName === userName) {
          return { ...item, balance: item.balance + parseInt(amount) };
        } else {
          return item;
        }
      });
      localStorage.setItem("data", JSON.stringify(updatedData));

      setSuccess(false);
    } else {
      alert("Kullanıcı bulunamadı!");
    }
    setSuccess(true);
  };

  return (
    <section className="deposit">
      <div className="deposit__wrap">
        {success ? (
          <div className="deposit__success">
            <div>Successful Money Transfer </div>
            <button
              className="button button--back"
              onClick={() => {
                setSuccess(false);
                navigate("/transfer");
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
              <div className="form-group">
                <label htmlFor="name">Kullanıcı Adı: </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
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
    </section>
  );
}

export default SendMoney;
