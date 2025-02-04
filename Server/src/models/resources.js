const connection = require('../database/index');


class Resources{
    updateResoucres(amount){
        try{
            const query = "UPDATE Resources SET AMOUNT = AMOUNT + ? WHERE Resources.NAME = 'Funds';"
        const values = [amount];

        connection.query(query, values, (error, results) => {
            // Release the connection back to the pool
            if (error) {
                console.log('Error executing query:', error);
                return false;
            } else {
                console.log('resources updated successfully:', results);
                return true;
            }
        });
        }catch(error){
            console.log("error",error);
        }
    }
}

module.exports = Resources;