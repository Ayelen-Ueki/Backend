const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const userModel = require('../db/models/user.model')
const{createHash,isValidatePassword}=require('../utils/bcryps')

//Aca vamos a hacer las configuraciones para el Registro y el Login

//Registro
const initializaePassport = () =>{
    //Vamos a usar las propiedades de passport. Use toma 2 argumentos, el nombre de la estrategia y la estrategia
    passport.use('register', new LocalStrategy(
        //Nuestro user name en este caso es el mismo email, que especificamos en el model que era unico para cada usuario
        // Con passReqToCallBack le damos acceso a todas las propiedades del user
        {usernameField: 'email',passReqToCallBack:true},
        async(req, username, password, done)=>{
            try{
                //Guardamos la info. del usuario que esta tratando de registrarse en una variable
                let userData = req.body
                let user = await userModel.findOne({email: username})
                if(user){
                    //Si ya encuentra un usuario con ese mail deberia rechazar la peticion
                    done('Error. El usuario ya existe', false)
                }
                let newUser={
                    name: userData.name, 
                    email: username, 
                    lastname: userData.lastname,
                    //Para encriptar las password
                    password: createHash(userData.password),
                    tel: userData.tel
                }
                //Guardo la info en mi modelo
                let result = await userModel.create(newUser)
                //Con null en done informo que no hay ningun error
                done(null, result)
            }catch(err){
                //Si hay algun error envio un mensaje y este caso concateno el error del catch
                done('Error al crear usuario' + err)
            }

        }
    ))
    //Para hacer una encriptacion adicional la sesion
    passport.serializeUser((user,done)=>{
        done(null, user._id)
    })
    //Para desencriptarlo
    passport.deserializeUser((id,done)=>{
        let user = userModel.findbyId(id)
        done(null,user)
    })
}

