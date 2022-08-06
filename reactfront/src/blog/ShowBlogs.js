import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/administrador/'


const CompShowBlogs = () => {
    
    const [blogs, setBlog] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteBlog = async (id) => {
       await axios.delete(`${URI}${id}`)
       getBlogs()
    }

    return(
        <div className='container'>
            <div className='row'>

                <div className='col'>
                    <br/>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Agregar nuevo Postgrado <i className="fas fa-plus"></i></Link>&nbsp;
                    <Link to="/reportes" className='btn btn-primary mt-2 mb-2'>Cargar Reporte de pago <i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th>Postgrado</th>
                                <th>Usuario Encargado</th>
                                <th> Usuario</th>
                                <th>Clave Usuario</th>
                                <th>Codigo Usuario</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog, index) => (
                                <tr key={ index }>
                                    <td> { blog.postgrado } </td>
                                    <td> { blog.usuarioEncargado } </td>
                                    <td> { blog.usuarioE } </td>
                                    <td> { blog.claveUsuario } </td>
                                    <td> { blog.codUsuario } </td>
                                    <td>
                                        <Link to={`/edit/${blog._id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link> &nbsp;
                                        <button onClick={ ()=>deleteBlog(blog._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowBlogs