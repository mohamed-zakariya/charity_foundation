const ResourcesModel = require('../models/resources')

const resourcesModel = new ResourcesModel()


class ResourcesController{
    async updateResources(amount){
        try{
            return await resourcesModel.updateResoucres(amount);
        }catch(err){
            console.log("error", err);
        }
    }
}

module.exports = ResourcesController;