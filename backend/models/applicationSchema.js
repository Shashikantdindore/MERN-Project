import mongoose from "mongoose";
import validator from "validator";
 
const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, "Please Provide Your name"],
        minLength:[3,"Name Must Contain At least 3 Character"],
        maxLength:[30 , "Name Cannot Exceed 30 character "],
    },
    email:{
        type : String,
        validator: [ validator.isEmail,"Please provide a Valid Email"],
        required: [true , 'Please Provide your Email'],

    },
    coverLetter:{
        type: String,
        required:[true , "Please Provide Your Cover Letter"],

    },
    phone:{
        type:Number,
        required : [true , "Please Provide your Phone Number"],

    },
    address:{
        type : String,
        required : [true , "Please Provide your Address"]
    },
    resume:{
        public_id:{
            type: String,
            required: true,
        },
        url:{
            type: String,
            required : true,

        }
    },
    applicantID:{
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        role:{
            type: String,
            enum : ["JobSeeker"],
            required : true
        }

    },

    employerID:{
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        role:{
            type: String,
            enum : ["Employer"],
            required : true
        }

    }

    
});

export const Application =mongoose.model("Application" , applicationSchema);