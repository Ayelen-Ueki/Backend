//funcion Register 
let users=[]
router.post('/register', (req, res)=>{
    let newUser = req.body
    newUser.id = Math.random()
    users.push(newUser)

    res.redirect('view/login-view')
})

router.get('/user', (req,res)=>{
    res.send(users)
})
module.exports = router