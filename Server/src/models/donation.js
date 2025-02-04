const connection = require('../database/index');


class Donation{


    insertDonation(donor, amount) {
        return new Promise((resolve, reject) => {
            const query =
                "INSERT INTO Donation (ID_DONOR, ID_RESCOURCES, AMOUNT, DONATION_DATE, RESOURCES_TYPE) " +
                "SELECT " +
                "(SELECT Donor.id FROM Donor WHERE Donor.USER_NAME = ?), " +
                "(SELECT Resources.ID FROM Resources WHERE Resources.NAME = 'Funds'), " +
                "?, CURDATE(), 'Funds'";
    
            const values = [donor, amount];
    
            connection.query(query, values, (error, results) => {
                // Release the connection back to the pool
                if (error) {
                    console.log('Error executing query:', error);
                    reject(false);
                } else {
                    console.log('Donation inserted successfully:');
                    resolve(true);
                }
            });
        });
    }
    
}

module.exports = Donation;