const userModel = require("../models/donor")

const user = new userModel()


class UserController{

    async findOne(username, password){
        try {
            let {check, NAME} = await new Promise((resolve, reject) => {
                user.findOne(username, password, resolve);
            });
    
            // Perform actions based on the result here
            return {check, username: NAME};
    
            // Continue with other logic that depends on the result
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    async insertDonor(username, fullname, Phonenumber, location, password){
        try{
            let {check, NAME} = await new Promise((resolve, reject) => {
                user.insertDonor(username, fullname, Phonenumber, location, password, resolve);
            });

            return {check, username: NAME};

        }catch(error){
            console.error("An error occurred:", error);
        }
    }
    
}

module.exports = UserController;