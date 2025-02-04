const RecipientOrganiztionModel = require('../models/recipientOrganiztion')

const recipientOrganiztion = new RecipientOrganiztionModel()

class recipientOrganiztionController{
    
    async getOrganizations(){
        try{
            return await recipientOrganiztion.getOrganizations();
        }catch(error){
            console.log("error", error);
        }
    }

}

module.exports = recipientOrganiztionController;