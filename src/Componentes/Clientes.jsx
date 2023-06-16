import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const Clientes = () => {
  
  const DATOS = process.env.REACT_APP_DATOS; 

  console.log(DATOS);
  
  const [apiData, setApiData] = useState([]);
   
   /* useEffect(() => {
        fetch(DATOS)
        .then((data) => data.json()) 
        .then((data) => console.log(data))
    }, []); */

    useEffect(() => {
      axios.get(DATOS)
      .then((res) => { 
        console.log(res.data);
        setApiData(res.data.personas)
      })
    }, []);

    const getData = () =>{
      axios.get(DATOS)
      .then((res) => {
        console.log(res.data);
        setApiData(res.data.personas)
      })
    }

    const onDelete = (id) => {
    axios.delete(`${DATOS}/${id}`)
      .then(() => {
          getData()
      })

      console.log (`${id} - Eliminado`)
    }

     
    console.log(apiData); 

return (
  <>
  <div className="container m-5"> Pagina de clientes</div>

  <Table singleLine>
    <Table.Header>
      <Table.HeaderCell>Nombre</Table.HeaderCell>
      <Table.HeaderCell>Apellido</Table.HeaderCell>
      <Table.HeaderCell>Email</Table.HeaderCell>
      <Table.HeaderCell>Update</Table.HeaderCell>
      <Table.HeaderCell>Delete</Table.HeaderCell>
    </Table.Header>
    <Table.Body>
      {apiData.map((data)=>{
        return (
          <Table.Row key= {data._id}> 
            <Table.Cell>{data.nombre}</Table.Cell>
            <Table.Cell>{data.apellido}</Table.Cell>
            <Table.Cell>{data.email}</Table.Cell>
            <Link>
              <Table.Cell>
                <Button onClick= {()=> console.log('Dato actualizado')}>
                  Update
                </Button>
                </Table.Cell>
             </Link>
                <Table.Cell>
                <Button onClick= {()=> onDelete(`${data._id} - Eliminado`)}>
                  Eliminar
                </Button>
              </Table.Cell>
          </Table.Row>
        )
      })

      }
    </Table.Body>
 </Table>
 </>
)
}


 /*return (

        <Table celled>
        <Table.Header>
          <Table.Row>
            {apiData.length > 0 && Object.keys(apiData[0]).map((key) => (
              <Table.HeaderCell key={key}>{key}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {apiData.map((item, index) => (
            <Table.Row key={index}>
              {Object.values(item).map((value, index) => (
                <Table.Cell key={index}>{value}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  };
*/

export default Clientes