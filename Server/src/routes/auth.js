const { Router } = require('express');
const router = Router();
// const users = require('../database/index');
const UserController = require("../controllers/donor")

const user = new UserController();


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDB = await user.findOne(username, password);
    console.log("ppppppp", password);
    try{
        if(userDB.check){
            req.session.user = userDB.username;
            res.status(200).send({ session: req.session});
        }
        else {
            res.status(400).send({ msg: 'Invalid credentials' });
        }
    }
    catch (error) {
        console.error('Error during login:', error);
        res.status(500).send({ msg: 'Internal server error' });
    }
})


router.post('/sign', async (req, res) => {
    const { username, fullname, Phonenumber, location, password } = req.body
    try{
        const userData = await user.insertDonor(username, fullname, Phonenumber, location, password);
        console.log("checkkkkkkk", userData.check);
        if(userData.check){
            req.session.user = userData.username;
            res.status(200).send( {session:req.session} );
        }
        else{
            res.status(400).send({ msg: 'Invalid credentials' });
        }
    }
    catch (error) {
        res.status(500).send({ msg: 'Internal server error' });
    }
})


module.exports = router





// router.post('/login', (req, res) => {
//     const { username, password } = req.body;
//     console.log("mmmm", req.body)
//     if(username && password){
//         const { user } = req.session
//         if(user){
//             res.send(req.session.user)
//         }
//         else{
//             req.session.user = {
//                 username,

//             };
//             res.send(req.session);
//         }
//     }
//     else{
//         res.send(401); // this status for not valid inputs
//     }

// })
