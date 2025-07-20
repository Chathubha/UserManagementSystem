const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Get All Users')
})
router.post('/',(req,res)=>{
    res.send('New User Created')
})

router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    res.send('user ${id} is deleted')
})

router.put('/:id',(req,res)=>{
   const id = req.params.id;
    res.send('user ${id} updated succesfully')  
}) 

   module.exports = router 