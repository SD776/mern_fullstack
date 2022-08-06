import mongoose from "mongoose";
const Schema = mongoose.Schema

const reporteSchema = new Schema(
    {
      fecha: {
        type: Date,
        required: true
    },
    descripcion: {
        type: String,
        required: true
        
    },
    referencia:{
        type: String,
        required: true,
        unique: true
    },
    monto: {
        type: String,
        required: true
    }

    },
    {collection: 'reportes'}
)

export default mongoose.model('ReporteModel', reporteSchema)