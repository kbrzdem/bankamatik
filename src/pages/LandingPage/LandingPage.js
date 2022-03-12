import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const Landing = () => {
  const [error, setError] = useState("");
  const localData = JSON.parse(localStorage.getItem("data"));
  const navigate = useNavigate();

  const login = (details) => {
    const found = localData?.find((e) => e.userName === details.userName);
    if (
      found?.userName === details.userName &&
      found?.password === details.password
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: details.name,
          email: found.email,
          balance: found.balance,
        })
      );
      navigate("/home");
    } else {
      setError("Lütfen alanları kontrol ediniz");
    }
  };

  return (
    <section className="search">
      <LoginForm Login={login} error={error} />
    </section>
  );
};

export default Landing;
