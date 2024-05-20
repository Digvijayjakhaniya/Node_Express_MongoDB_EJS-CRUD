import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    fees:{type:mongoose.Decimal128,required:true}
})

const studentModel = mongoose.model('student',studentSchema)

export {studentModel}