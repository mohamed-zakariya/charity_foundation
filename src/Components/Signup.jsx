import React, { useState } from 'react';


function Signup({setloginFlag, setsignupFlag , setuserlog}) {

    const [username, setusername] = useState("");
    const [fullname, setfullname] = useState("");
    const [Phonenumber, setphonenumber] = useState("");
    const [location, setlocation] = useState("");
    const [password, setpassword] = useState("");

    const handleNavigate = () => {
        setloginFlag(true)
        setsignupFlag(false)
    }

    const valdiation = () => {
        let userName = document.getElementById('userName').value;
        let Name = document.getElementById('Name').value;
        let passwordSign = document.getElementById('passwordSign').value;
        let PhoneNumber = document.getElementById('PhoneNumber').value;
    
        const usernameRegex = /^[A-Za-z0-9_]+$/;
        const textRegx = /^[A-Za-z ]+$/;
        const PhoneNumberRegex = /^[0-9]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
        if (!userName.match(usernameRegex) || !Name.match(textRegx) ||
            !PhoneNumber.match(PhoneNumberRegex) || !passwordSign.match(passwordRegex)) {
            alert("Please correct the following errors:\n\n" +
                (!userName.match(usernameRegex) ? "- Enter a valid user name. (Alphanumeric characters and underscores only)\n" : "") +
                (!Name.match(textRegx) ? "- Enter a valid Name. (Alphabets only)\n" : "") +
                (!PhoneNumber.match(PhoneNumberRegex) ? "- Enter a valid phone number. (Numeric characters only)\n" : "") +
                (!passwordSign.match(passwordRegex) ? "- Enter a valid password. (Minimum 8 characters, at least one lowercase letter, one uppercase letter, one digit, and one special character)\n" : "")
            );
            return false;
        }
        else{
            return true
        }
    }
    

    const handleForm = async (e) => {
        e.preventDefault();
        if(!valdiation()){
            return;
        }

        try{
            const response = await fetch("auth/sign", {
                method: "POST",
                headers:{ "Content-Type": "application/json" },
                body: JSON.stringify({ username, fullname, Phonenumber, location, password })
            })
            if(response.ok){
                const sessionData = await response.json();

                localStorage.setItem('sessionData', JSON.stringify(sessionData));
                console.log("hereee")
                setuserlog(true);
                setsignupFlag(false);
                setloginFlag(false);
            }else {
                // Handle authentication failure
                console.error('Authentication failed');
            }
        }catch (error) {
            console.error('Error during authentication:', error);
        }

    }


    
    return(
        <div class="body">
            <div class="signup-form">
                <div class="return-back">
                    <button style= {{ border: "0px" }} onClick={handleNavigate}>
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>    
                    {/* <a style= {{ border: "0px" }} href="login.html">

                    </a> */}
                </div>
                <div class="logo-signup">
                    <i class="fa-solid fa-hands-holding-child"></i>
                </div>
                <form  onSubmit={handleForm}>
                    <div class="heading-style-signup">
                        <h1>ISYZ Foundation</h1>
                    </div>
                    
                <div class="inputs">
                        
                        {/* <!-- firstName input --> */}
                        <input type="text" id="userName" class="form-control" name="username" placeholder="Username" onChange={ (e) => { setusername(e.target.value) }}/>
                        
                        {/* <!-- lastName input --> */}
                        <input type="text" id="Name" class="form-control" name="Name" placeholder="Fullname" onChange={ (e) => { setfullname(e.target.value) } }/>
                        
                        {/* <!-- PhoneNumber input --> */}
                        <input type="number" id="PhoneNumber" class="form-control" name="PhoneNumber" placeholder="Phone Number" onChange={ (e) => { setphonenumber(e.target.value) } }/>
                        
                        {/* <!-- 2 column grid layout for inline styling --> */}
                        {/* Password input */}
                        <input type="text" id="location" class="form-control" name="location" placeholder="Location" onChange={ (e) => { setlocation(e.target.value) } }/>

                        <input type="password" id="passwordSign" class="form-control" name="Password" placeholder="Password" onChange={ (e) => { setpassword(e.target.value) } }/>
             
                        <div id="createAccount-button">
                            <input  value="Sign Up" type="submit" class="btn btn-primary btn-block mb-4" />
                        </div>
                </div>
                    
                
                </form>
            </div>
            <div class="background-image-signup">
                <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/11/charity-10.png" alt="" width="500px" height="700px" />
            </div>
        </div>
    );
}

export default Signup;