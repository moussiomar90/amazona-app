import mongoose from 'mongoose'

const userschema = mongoose.Schema({
    name:{type:  String ,required:true},
    email:{type:  String ,required:true ,unique: true},
    password : {type: String , required : true},
    isAdmin : {type: String , required : true ,default:false },
},
    {
        timestamps:true,
    }

) ;
const User  = mongoose.model('user',userschema) ;

export default User;