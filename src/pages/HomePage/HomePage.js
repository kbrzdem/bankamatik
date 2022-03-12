import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const adminUser = JSON.parse(localStorage.getItem("user"));

  const Logout = () => {
    navigate("/");
    localStorage.removeItem("user");
  };

  return (
    <section className="home">
      <div className="home__wrap">
        <div className="home__welcome">
          <div>
            <span>Hi {adminUser.name} Welcome!</span>
            <span>Choose your operation</span>
          </div>

          <div>
            <button className="button" onClick={Logout}>
              Logout
            </button>
          </div>
        </div>
        <div className="home__link-wrap">
          <div className="home__link home__link--mr">
            <Link to="/deposit">Deposit</Link>
            <Link to="/withdraw">Withdraw</Link>
            <Link to="/transfer">Transfer</Link>
          </div>
          <div className="home__link">
            <Link to="/currency">Currency Transactions</Link>
            <Link to="#">My Account</Link>
            <Link to="#">MyInformation</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
