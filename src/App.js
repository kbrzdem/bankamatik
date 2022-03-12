import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Deposit from "./components/Deposit/Deposit";
import Withdraw from "./components/Withdraw/Withdraw";
import Transfer from "./components/Transfer/Transfer";
import Currency from "./components/CurrencyTransactions/CurrencyTransactions";
function App() {
  const data = [
    {
      userName: "john",
      email: "john@company.com",
      password: "john123",
      balance: 1000.0,
      Iban: "TR320010009999901234567890",
    },
    {
      userName: "mary",
      email: "mary@company.com",
      password: "mary123",
      balance: 500.0,
      IBAN: "TR320010009999901234567891",
    },
  ];

  const getData = () => {
    localStorage.setItem("data", JSON.stringify(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/currency" element={<Currency />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
