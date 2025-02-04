const donationModel = require('../models/donation');

const donation = new donationModel();

class DonationController{

    async insertDonation(donor, amount) {
        try {
            // Attempt to insert the donation using async/await
            const check = await donation.insertDonation(donor, amount);
            return check;
        } catch (error) {
            console.log("Error in async insertDonation:", error);
            // Handle the error or rethrow it based on your application logic
            throw error;
        }
    }

}

module.exports = DonationController;