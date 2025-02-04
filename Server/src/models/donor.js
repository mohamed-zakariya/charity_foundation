const connection = require("../database/index")
const bcrypt = require('bcrypt')


class User{
    

    findOne(username, password, callback) {
        try {
            const query = "SELECT * FROM Donor";
            connection.query(query, function (err, rows, fields) {
                if (err) {
                    console.log('An error occurred with the query');
                    console.log(err);
                    callback(false);
                    return;
                }
                for (var i = 0; i < rows.length; i++) {
                    console.log("usernameeeeeeeeeee", rows[i].USER_NAME);
                    if (rows[i].USER_NAME == username && rows[i].PASSWORD == password) {
                        console.log("entered");
                        callback({check: true, NAME: rows[i].USER_NAME});

                        break; // Break out of the loop once a match is found
                    }
                }
                callback({check: false});
            });
        } catch (e) {
            console.log("Error:", e);
            callback(false);
        }
    }
    

    insertDonor(username, fullname, Phonenumber, location, password, callback) {
        try {
          const query = "INSERT INTO Donor (USER_NAME, name, PHONE_NUMBER, location, PASSWORD) VALUES (?, ?, ?, ?, ?)";
          const values = [username, fullname, Phonenumber, location, password];
      
          // Execute the query with the provided values
          connection.query(query, values, (error, results) => {
            // Release the connection back to the pool
            if (error) {
              console.log('Error executing query:', error);
              callback({ check: false });
            } else {
              console.log('Donor inserted successfully:', results);
              callback({ check: true, username });
            }
          });
        } catch (error) {
          console.log('Error:', error);
          callback({ check: false });
        }
      }
    
    
}


module.exports = User;