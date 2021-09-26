//import { Link } from "react-router-dom";
//import foodThumb from "../img-mockup/nasi-goreng-70674_1280.jpg";
import Featured from "./Featured";
import FoodList from "./FoodList";
import "./Main.css";

const Main = () => {
  return (
    <>
    <div class="hero">
      <h2>What to Eat?</h2>
      <p>Discover foods to cook and eat!</p>
      <button>v</button>
    </div>
      <Featured />
      <FoodList />
    </>
  );
};

export default Main;
/*<section className="card">
        <img src={foodThumb} alt="This food" />
        <div className="description-text">
          <h2>Nasi Goreng</h2>
          <Link to="/details">
            <em>Details &gt;</em>{" "}
          </Link>
        </div>
      </section>*/