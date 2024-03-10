import { Router } from "express";
import passport from "passport";
export const router = Router()

//"Github" es el nombre que yo le di a mi estrategia en "passport"
router.get('/',passport.authenticate('github',{}), (req, res) =>{


})

router.get('/callbackGithub', passport.authenticate('github',{}),(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({payload:'ok'});
})