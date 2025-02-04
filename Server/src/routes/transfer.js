const { Router, json } = require('express');
const router = Router();

const DonationController = require('../controllers/donation')
const ReceviesController = require('../controllers/recevies');

const donation = new DonationController();
const recevies = new ReceviesController();


// router.use((req, res, next) => {
//     console.log("ddddddd", req.body)
//     if(req.donor) next();
//     else res.send(401);
// })


router.post('', async (req, res) => {
    const { donor, organization, amount } = req.body
    const check1 = await donation.insertDonation(donor, amount);
    const check2 = await recevies.insertRecevies(organization, amount);
    if(check1 && check2){
        res.send({check1, check2})
    }
    else{
        res.send(404); // not found
    }
})


module.exports = router;