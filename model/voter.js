import mongoose from "mongoose";

const voterSchema = new mongoose.Schema({

    id:{
        type: Number,
        required: true,
        unique: true
    },

    name:{
        type: String,
        required: true,
        trim: true
    },

    age:{
        type: Number,
        required: true
    },

    phone:{
        type: Number,
        required: true,
    },

    address:{
        type: String,
        required: true,
        trim: true
    },

    gender:{
        type: String,
        required: true
    }
    
})

const voterModel = mongoose.model("voter",voterSchema)

export default voterModel