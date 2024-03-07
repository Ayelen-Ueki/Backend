//funcion Register 
let users=[]
router.post('/register', (req, res)=>{
    let newUser = req.body
    newUser.id = Math.random()
    users.push(newUser)

    res.redirect('/views/login-view')
})

router.post('/login', (req, res)=>{
    let newUser=req.body
    let userfound=users.find(user=>{
        return user.useremail == newUser.useremail && user.password == newUser.password
    })
    if(userfound){
        req.session.user = newUser.user
        req.session.password = newUser.password

        res.redirect('/views/profile-view')
        return
    }
    res.send("Usuario o contraseña incorrectos")
})

router.get('/user', (req,res)=>{
    res.send(users)
})
module.exports = router