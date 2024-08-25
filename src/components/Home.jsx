import { useState, useEffect } from "react";
import NavBar from "./Navbar";

const Home = () => {


const [pizzas, setPizzas] = useState([]);

const getPizzas = async () => {
  const res = await fetch('http://localhost:5000/api/pizzas/p001')
  const data = await res.json()

  setPizzas(data)
  console.log(data);
}
useEffect(() => {
getPizzas();

},[])


  return (
    <div className="FullNavbar">
      <NavBar></NavBar>
      <div className="PizzaFondo">
        <h2>¡Pizzeria Mamma Mia!</h2>
        <h5>Las mejores pizzas que podrías desear</h5>
        <hr></hr>
      </div>
    </div>
  );
};

export default Home;
