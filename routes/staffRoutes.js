const express=require('express');
const router= express.Router();


const {createStaff,getAllStaff,updateStaff,deleteStaff}= require('../controllers/staffController')

router.post('/createStaff',createStaff)
router.get('/readStaff',getAllStaff)
router.put('/updateStaff/:id',updateStaff)
router.delete('/deleteStaff/:id',deleteStaff)

module.exports=router;