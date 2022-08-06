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


    return(
        <div className='container'>
            <div className='row'>

                <div className='col'>
                    <br/>
                    
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th>Postgrado</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map ( (blog, index) => (
                                <tr key={ index }>
                                    <td> { blog.postgrado } </td>
                                    
                                    <td>
                                     <Link to={`/cargar-materias/${blog._id}`} className='btn btn-info'>Cargar Materias  <i className="fas fa-edit"></i></Link> &nbsp;
                                       
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