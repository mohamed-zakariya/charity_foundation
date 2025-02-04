const connection = require('../database/index');


class Recevies{


    insertRecevies(org, amount) {
        return new Promise((resolve, reject) => {
            const query =
                "INSERT INTO receives (SSN_RECIPIENT, SSN_RESOURCES, AMOUNT, RECEIVES_DATE, RESOURCES_TYPE) " +
                "SELECT " +
                "(SELECT Recipient_Organization.SSN FROM Recipient_Organization WHERE Recipient_Organization.NAME = ?), " +
                "(SELECT Resources.ID FROM Resources WHERE Resources.NAME = 'Funds'), " +
                "?, CURDATE(), 'Funds'";
    
            const values = [org, amount];
    
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

module.exports = Recevies;