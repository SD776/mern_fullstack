import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/reporte/'


const MostrarReporte = () => {
    
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
                    <Link to="/reportes" className='btn btn-primary mt-2 mb-2'>Cargar nuevo Reporte  de pago<i className="fas fa-plus"></i></Link>&nbsp;
                    
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th>Fecha</th>
                                <th>Descripcion</th>
                                <th> Referencia</th>
                                <th> Monto</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog, index) => (
                                <tr key={ index }>
                                    <td> { blog.fecha } </td>
                                    <td> { blog.descripcion } </td>
                                    <td> { blog.referencia } </td>
                                    <td> { blog.monto } </td>
                                    
                                    <td>
                                        <Link to={`/editar-reporte/${blog._id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link> &nbsp;
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

export default MostrarReporte