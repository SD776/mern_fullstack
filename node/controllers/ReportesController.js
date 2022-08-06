//importamos el Modelo
import ReporteModel from "../models/ReporteModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los reportes
export const getAllreportes = async (req, res) => {
    try {
        const reportes = await ReporteModel.find()
        res.status(200).json(reportes)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un reporte
export const getReporte = async (req, res) => {
        try {
            const id = req.params.id
            await ReporteModel.findById( {_id:id} ).then( (reporte) => {
                res.status(200).json(reporte)
            })        
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un reporte
export const createReporte = async (req, res) => {
    try {
       await ReporteModel.create(req.body)
       res.status(200).json({
           "message":"Reporte creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un reporte
export const updateReporte = async (req, res) => {
    try {
        const id = req.params.id
        await ReporteModel.updateOne({_id: id}, req.body).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡reporte actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un reporte
export const deleteReporte = async (req, res) => {
    try {
        const id = req.params.id
        await ReporteModel.deleteOne({ _id : id }).then( res => {
            console.log(res)
        })
        res.status(200).json({
            "message":"¡reporte eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}