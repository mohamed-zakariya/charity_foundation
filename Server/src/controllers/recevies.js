const receviesModel = require('../models/recevies');

const recevies = new receviesModel();

class ReceviesController{

    async insertRecevies(donor, amount) {
        try {
            // Attempt to insert the donation using async/await
            const check = await recevies.insertRecevies(donor, amount);
            return check;
        } catch (error) {
            console.log("Error in async insertDonation:", error);
            // Handle the error or rethrow it based on your application logic
            throw error;
        }
    }

}

module.exports = ReceviesController;