import "./App.css";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <div className="App">
      <ProductCard
        name="LEILA FLORAL DRESS, BEIGE"
        currPrice="89.00"
        prevPrice="109.00"
        off="15"
        img="https://res.cloudinary.com/dqf1zqrr9/image/upload/v1643119273/users/nzydrbkyezhjimiymom9.jpg"
      />
    </div>
  );
};

export default App;
