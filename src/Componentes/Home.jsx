import { Message } from "semantic-ui-react";

const Home = () => {
    return (
     <div className="App">
    <Message >
    <Message.Header>Bienevenidos a nuestra app de clientes</Message.Header>
        <Message.List>
         <Message.Item>Registrmos clientes para su empresa </Message.Item>
         <Message.Item>Obtenemos los datos de los registros</Message.Item>
     </Message.List>
  </Message>
  </div>
    )
};

export default Home