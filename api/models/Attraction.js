import mongoose from 'mongoose';
const { Schema } = mongoose;

const AttractionSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    city:{
        type: String,
        required:true
    },
    distance:{
        type: String,
        required:true
    },
    photo:{
        type: [String],
    },
    title:{
        type: String,
        required:true
    },
    desc:{
        type: String,
        required:true
    },
    package:{
        type: [String],
    },
    cheapestPrice:{
        type:Number,
        required: true
    },
    featured:{
        type: Boolean,
        default:false,
    },
})

export default mongoose.model("Attarction", AttractionSchema )