const mongoose=require('mongoose')

const staffSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    daysAvailable:{
        type:[String],
        required:true
    },
    startTiming:{
        type:String,
        required:true
    },
    endTiming:{
        type:String,
        required:true
    },

})

const Staff=mongoose.model('Staff',staffSchema);
module.exports= Staff;