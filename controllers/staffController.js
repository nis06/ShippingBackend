const Staff= require('../models/staff')



//pehla- create new staff
exports.createStaff= async (req,res) =>{
    try{
        const {name,daysAvailable,startTiming,endTiming} = req.body;

        if(!name|| !daysAvailable || !startTiming || !endTiming){
            return res.status(400).json({
                success: false,
                message: "All fields are required",
              });
        }

        const staff= new Staff({
            name,
            daysAvailable,
            startTiming,
            endTiming
        });

        await staff.save()

        res.status(200).json({
            success:true,
            message:"Staff created successfully"
        })

    }catch(e){
        return res.status(400).json({
            success: false,
            message: "Failed to create staff",
          });
    }
}

//second- Read all staff

exports.getAllStaff = async (req,res) => {
    try{
        const staff = await Staff.find();
        return res.status(200).json({
            success:true,
            message:"All staff read successfully",
            data:staff
        })
    }catch(e){
        return res.status(400).json({
            success: false,
            message: "Failed to create staff",
          });
    }
}


// third - get Staff by id
exports.getStaffbyId = async (req,res) => {
    try{
        const id=req.params.id;
        const staff= await Staff.findById({_id:id})
        if(!staff){
            return res.status(400).json({
                success: false,
                message: "No staff for  given id",
              });
        }

        res.status(200).json({
            success:true,
            data:staff,
            message:`staff for ${id} is fetched`
        })

    }catch(e){
        return res.status(400).json({
            success: false,
            message: "Failed to get staff by id",
          });
    }
}


//four - update staff
exports.updateStaff = async (req,res) =>{
    try{
        const {id}=req.params;
        const {daysAvailable,startTiming,endTiming}=req.body;

        const staff= await Staff.findByIdAndUpdate(
            {_id:id},
            {daysAvailable,startTiming,endTiming}
        )

        res.status(200).json({
            success:true,
            message:`updated for ${id} successfully`
        })
    }catch(e){
        return res.status(400).json({
            success: false,
            message: "Failed to update staff",
          });
    }
}

//five- delete staff

exports.deleteStaff= async (req,res)  =>{
    try{
        const id=req.params.id;
        const staff = await Staff.findByIdAndDelete(id)
        if(!staff){
            return res.status(400).json({
                success:false,
                message:"no staff found for such id"
            })
        }

        res.status(200).json({
            success:true,
            message:`deleted for ${id} successfully`
        })
    }catch(e){
        return res.status(400).json({
            success: false,
            message: e.message,
            
          });
    }
}