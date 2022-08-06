import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/administrador/'

const CompCreateBlog = () => {
    const [postgrado, setpostgrado] = useState('')
    const [usuarioEncargado, setusuarioEncargado] = useState('')
    const [usuarioE, setusuarioE] = useState('')
    const [claveUsuario, setclaveUsuario ]= useState('')
    const [codUsuario, setcodUsuario ]= useState('')
    
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {postgrado: postgrado, usuarioEncargado:usuarioEncargado, usuarioE:usuarioE, claveUsuario:claveUsuario, codUsuario:codUsuario})
        navigate('/')
    }   

    return (

        <div className='container'>
            <br/>
           <h3>Agregar un nuevo Postgrado</h3>
           <h4>y los datos del Usuario Encargado</h4>
           <br/>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre del Postgrado</label>
                    <input
                        value={postgrado}
                        onChange={ (e)=> setpostgrado(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Usuario Encargado</label>
                    <textarea
                        value={usuarioEncargado}
                        onChange={ (e)=> setusuarioEncargado(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <div className='mb-3'>
                     <label className='form-label'>Usuario</label>
                    <textarea
                        value={usuarioE}
                        onChange={ (e)=> setusuarioE(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div> 
                 <div className='mb-3'>
                     <label className='form-label'>clave de usuario</label>
                    <textarea
                        value={claveUsuario}
                        onChange={ (e)=> setclaveUsuario(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div> 
                 <div className='mb-3'>
                     <label className='form-label'>codigo de Usuario</label>
                    <textarea
                        value={codUsuario}
                        onChange={ (e)=> setcodUsuario(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>    
                 <button type='submit' className='btn btn-primary'>Guardar</button>                  
           </form>
        </div>
    )
}

export default CompCreateBlog