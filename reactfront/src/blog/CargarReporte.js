import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import Swal from 'sweetalert2';
//import 'sweetalert2/dist/sweetalert2.min.css'

const URI = 'http://localhost:8000/reporte/'
const CargarReporte = () => {

    const [fecha, setfecha] = useState('')
    const [descripcion, setdescripcion] = useState('')
    const [referencia, setreferencia] = useState('')
    const [monto, setmonto ]= useState('')

    const navigate = useNavigate() 


    const onSubmit = async ( e ) => {
        e.preventDefault();
        await axios.post(URI, {fecha: fecha, descripcion:descripcion, referencia:referencia, monto:monto})
        navigate('/')
/*if (values.codpost.length <= 0 || values.claveUsuario.length <= 0 || values.postgrado.length <= 0 || values.usuarioEncargado.length <= 0) {
        Swal.fire('Campos vacios', 'Debe llenar todos los campos del formulario','error');
        return;}*/
        
        
    }

    return (
    <>
        
    <hr />
    <form className="container" onSubmit= {onSubmit} >
        <h2 className='text-aling-center'> Cargar un reporte de pago </h2>
        <hr />
        <div className="form-group mb-2">
            <label>Fecha</label>
            <input className="form-control" 
            placeholder="AAA-MM-DD"
            name="fecha"
            value={fecha}
            onChange={ (e)=> setfecha(e.target.value)} />
        </div>

        <div className="form-group mb-2">
            <label>Descripcion</label>
            <input className="form-control" 
            placeholder="Descripción"
            name="descripcion"
            value={descripcion}
            onChange={ (e)=> setdescripcion(e.target.value)}/>
        </div>

        <hr />
        <div className="form-group mb-2">
            <label>Referencia</label>
            <input 
                type="text" 
                className="form-control"
                placeholder="Ref."
                name="referencia"
                autoComplete="off"
                value={referencia}
                onChange={ (e)=> setreferencia(e.target.value)}
            />
            
        </div>

        <div className="form-group mb-2">
        <label>Monto</label>
            <input 
                type="text" 
                className="form-control"
                placeholder="Ingrese el monto"
                rows="5"
                name="monto"
                value={monto}
                onChange={ (e)=> setmonto(e.target.value)}
            />
            
        </div>
       

        <button
            type="submit"
            className="btn btn-outline-primary btn-block"
        >
            <i className="far fa-save"></i>
            <span> Guardar</span>
        </button>

    </form>
        </>
    )
}
export default CargarReporte