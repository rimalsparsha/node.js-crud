import voterModel from "../model/voter.js";


class voterController{


    //create
    static createDoc = async (req,res) =>{
        try{
            const {id, name, age, phone, address, gender} = req.body
            const doc = new voterModel({
                id:id,
                name:name,
                age:age,
                phone:phone,
                address:address,
                gender:gender
            })

            //save
            const result = await doc.save()
            // console.log(result)
            res.redirect("/")
        }
        catch (error){
            console.log(error)
        }
    }


    //read
    static getAllDoc = async (req,res) =>{

        try{
        const result = await voterModel.find()
        //console.log(result)
        res.render("index", {data: result})
        }

        catch(error){
            console.log(error)
        }
    }


    //edit
    static editDoc = async(req,res) =>{
                // console.log(req.params.id)
                try {
                    const result = await voterModel.findById(req.params.id)
                   // console.log(result)
                    res.render("edit", {data: result})
                } 
                catch (error) {
                    console.log(error)
                }
    }


    //update
    static updateDocById = async(req,res) =>{
        try {
            const result = await voterModel.findByIdAndUpdate(req.params.id, req.body)
            //console.log(result)
        } 
        catch (error) {
            console.log(error)
        }
        res.redirect("/")
    }


    //delete
    static deleteDocById = async(req,res) =>{
        try {
            const result = await voterModel.findByIdAndDelete(req.params.id)
            res.redirect("/")
        } 
        catch (error) {
            console.log(error)
        }
    }

}


export default voterController