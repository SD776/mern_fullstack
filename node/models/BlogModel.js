import mongoose from "mongoose";
const Schema = mongoose.Schema

const blogSchema = new Schema(
    {
      postgrado: {
        type: String,
        required: true
    },
    usuarioEncargado: {
        type: String,
        required: true
        
    },
    usuarioE:{
        type: String,
        required: true,
        unique: true
    },
    claveUsuario: {
        type: String,
        required: true
    },
    
    codUsuario: {
        type: String,
        required: true,
        unique: true
    },
    materia:[],
    },
    {collection: 'administrador'}
)

export default mongoose.model('BlogModel', blogSchema)