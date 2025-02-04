const { Router } = require('express');
const router = Router();

const recipientOrganiztionController = require('../controllers/recipientOrganiztion')
const recipientOrganiztion = new recipientOrganiztionController()



router.get('', async (req, res) => {
    try{
        const data = await recipientOrganiztion.getOrganizations();
        if(data){
            res.send({ data })
        }
        else{
            res.status(400).send({ msg: 'Invalid credentials' });
        }
    }catch(error){
        console.log(error);
    }
});

module.exports = router