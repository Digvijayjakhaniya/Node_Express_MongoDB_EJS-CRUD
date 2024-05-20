import { studentModel } from "../models/studentModel.js"

class studentController{
    static index = async (req,res) =>{
        try {
            const studata = await studentModel.find() 
            res.render('index',{title:'Home',studata})
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    }

    static create = (req,res) =>{
        res.render('create',{title:'Create student'})
    }

    static store = async (req,res) =>{
       try {
            const {name,age,fees} = req.body
            
            const studentData = new studentModel({
                name:name,
                age:age,
                fees:fees
            })

            await studentData.save()
            res.redirect('/')

       } catch (error) {
        console.log(error)
        res.redirect('/create')
       }
    }

    static edit = async (req,res) =>{
        try {
            const stuid = await studentModel.findById(req.params.id)
            res.render('edit',{title:'Update student',stuid})
        } catch (error) {
            console.log(error)
            res.redirect('/',error)
        }
    }

    static update = async (req,res) =>{
        try {
            await studentModel.findByIdAndUpdate(req.params.id,req.body)
            res.redirect('/')
        } catch (error) {
            console.log(error) 
            res.redirect(`/edit/${req.params.id}`)
        }
    }

    static delete = async (req,res) =>{
        try {
            await studentModel.findByIdAndDelete(req.params.id)
            res.redirect('/')
        } catch (error) {
            console.log(error)
            res.redirect('/')
        }
    }
}

export {studentController}