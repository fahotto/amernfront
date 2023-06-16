import 'semantic-ui-css/semantic.min.css';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import axios from 'axios' ;
import Swal from 'sweetalert2';

 
const Formulario = () => {

    const URL = process.env.REACT_APP_URL;
 
    const { register, handleSubmit, reset, formState: {errors} } = useForm ({
        defaultValues: {
            nombre: '',
            apellido: '',
            email: '',
            password: ''
        }
    });
 
const onSubmit = (datos, e) => {
    e.preventDefault();
    try {
        console.log(datos);
        axios.post (URL, datos)
        e.target.reset()
        Swal.fire({
            title: 'Welcome!',
            text: 'Tu Usuario ha sido creado',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    } catch (error) {
        console.log(error);
    }
}

    return (
        <div className="App">
            <h1>Formulario de Registro</h1>
        
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label> Nombre :</label>
                    <input 
                        placeholder= 'Nombre'
                        type= 'text'
                        name= 'nombre'
                        {...register('nombre', 
                            {
                                required:true,
                                maxlength:80,
                                })} />
                </Form.Field>
                {errors.nombre && <p className="errores">El nombre es obligatorio y max 50 caracteres</p>}


                <Form.Field>
                    <label> Apellido :</label>
                    <input 
                        placeholder = 'Apellido' 
                        type= 'text' 
                        name= 'apellido'
                        {...register('apellido', 
                            {
                                required:true,
                                maxlength:80,
                                })} />
                </Form.Field>
                {errors.apellido && <p className="errores">El apellido es obligatorio y max 50 caracteres</p>}
                
                <Form.Field>
                    <label>Email : </label>
                    <input 
                        placeholder = 'Email'
                        type= 'email' 
                        name= 'email'
                    {...register('email', 
                    {
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                    })} />
                </Form.Field>
                {errors.email && <p className="errores">El email es obligatorio </p>}

                <Form.Field>
                <label> Password :</label>
                <input 
                placeholder='Password (de 6 a 10 caracteres)' 
                type= 'password' 
                name='password'
                {...register('password',
                {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/,
                })} />
                </Form.Field>
                {errors.password && <p className="errores">El password es obligatorio y debe contener letras minusculas, mayusculas y entre 6 y 10 caracteres</p>}

                <div className='centrar'>
                        <Button.Group>
                            <Button type='button' onClick={() => reset()} primary>Limpiar Formulario</Button>
                            <Button.Or />
                            <Button type='submit' positive>Enviar Datos</Button>
                        </Button.Group>
                    
                </div>
            </Form>
        </div>
    )}


export default Formulario;