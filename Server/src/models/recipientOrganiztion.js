const connection = require('../database/index')

class RecipientOrganiztion{
    async getOrganizations() {
        try {
            const query = "SELECT * FROM Recipient_Organization";
            return new Promise((resolve, reject) => {
                connection.query(query, (err, rows, fields) => {
                    if (err) {
                        console.log("Error: ", err);
                        reject(err);
                    } else {
                        const data = rows.map(row => ({
                            id: row.SSN,
                            name: row.NAME,
                            phoneNumber: row.PHONE_NUMBER,
                            location: row.LOCATION
                        }));
                        console.log("Data:", data);
                        resolve(data);
                    }
                });
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
}

module.exports = RecipientOrganiztion