//Este middleware deberia implementarse cuando se quiere acceder al perfil del usuario

export const auth=(req, res, next) => {
    //Para autenticar al usuario: Bearer Auth
    if(req.headers["Authorization"]){
        res.setheader('Content-Type', 'application/json')
        return res.status(401).json({error:`Usuarion no autenticado`})
    }
    //Si no hay inconvenientes avanzo con el siguiente paso
    next()
} 