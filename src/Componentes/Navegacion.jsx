import { Input, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


const Navegacion = () => {

        return (
        <Menu secondary>
            <Menu.Item name='Home'> 
            <NavLink to ="/"> Home </NavLink> 
            </Menu.Item>
            
            <Menu.Item name='Formulario'> 
            <NavLink to ="/formulario"> Formulario</NavLink> 
            </Menu.Item>


            <Menu.Item name='Clientes'> 
            <NavLink to ="/clientes"> Clientes</NavLink> 
            </Menu.Item>


            <Menu.Menu position='right'>
            <Menu.Item>
                <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
                name='logout'
                />
            </Menu.Menu>
        </Menu>
        )
    }

    export default Navegacion