const express = require('express');
const router = express.Router();
let students = require('../../students')

router.get('/', (req, res) =>res.json(students))
router.get('/:id', (req, res) =>{
    let student = students.find(x => x.id == req.params.id)
    if (student){
        res.json(student)
    } else {
        res.json({'status': 'No student found'})
    }
})

router.post('/', (req, res)=>{
    let student = {
        "id": req.body.id,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "email": req.body.email,
        "gender": req.body.gender
    }
    students.push(student)
    res.json(student)
})

router.put('/:id', (req, res) =>{
    let student = students.find(x => x.id == req.params.id)
    if (student){
        students.forEach(s => {
            if (s.id == student.id) {
                s.first_name = req.body.first_name ? req.body.first_name : s.first_name,
                s.last_name = req.body.last_name ? req.body.last_name : s.last_name,
                s.email = req.body.email ? req.body.email : s.email,
                s.gender = req.body.gender ? req.body.gender : s.gender
            }
        })
        res.json(student)
    } else {
        res.json({'status': 'No student found'})
    }
})

router.delete('/:id', (req, res) =>{
    let student = students.find(x => x.id == req.params.id)
    if (student){
        students = students.filter(x => x.id != req.params.id)
        res.json({'message': 'User deleted'})
    } else {
        res.json({'status': 'No student found'})
    }
})

module.exports = router;