// logic for  registering an admin in mongodb

// import admins collection(model)

const admins=require('../models/registerschema')

exports.registerAdmin=async(req,res)=>{
    const {staffId,username,phonenumber,password}=req.body

    try{
            // check admin is present in the system
            const admin = await admins.findOne({phonenumber})
            
            // if admin is present
            if(admin){
                res.status(200).json("admin is already exist please login")
            }else{
                
            // if admin is not present add new admin
            const newadmin=new admins({
                
                staffId,username,phonenumber,password
                
            })

            // save to db
            await newadmin.save()
            res.status(200).json("new admin added sucessfully")
        }


    }catch(error){
        res.status(401).json(error)

    }

}


exports.LoginAdmin=async (req,res)=>{
    const  {staffId,password}=req.body
    console.log(staffId,password);
    try{
        const admin= await admins.findOne({staffId,password})
        if(admin){
            console.log("hiiiii");
            res.status(200).json("login successfull")
        }else{
            res.status(401).json("incorrect username or password")
        }

    }catch(error){
            res.status(401).json(error)
    }
}

