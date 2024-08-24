import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Pizzas from "./json/pizzas";
import { useEffect} from "react";

function CardPizza({ catchPizza }) {
  console.log(Pizzas);

//Crear el await, luego crear un useState con Pizzas set Pizzas para que el sistema lo reconozca y no deba cambiar todas las variantes
//El setPizzas debe tomar los datos del API
useEffect(() => {






},[])



  return (
    <div className="pizzacontainer">
      {Pizzas.map((pizza) => (
        <Card style={{ width: "40vh" }} className="pizza" key={pizza.id}>
          <Card.Img variant="top" src={pizza.img} />
          <Card.Body>
            <Card.Title className="pizza_name">{pizza.name}</Card.Title>
            <div className="ingredientes">
              <h5 className="ingrediente">Ingredientes:</h5>
              {pizza.ingredients.map((ingredient, i) => (
                <p key={i}>🍕{ingredient}</p>
              ))}
            </div>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <strong>Valor: ${pizza.price}</strong>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="primary">👀Ver Más</Button>{" "}
            <Button
              variant="success"
              onClick={() => catchPizza(pizza)}
            >
              🛒Añadir
            </Button>{" "}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardPizza;
