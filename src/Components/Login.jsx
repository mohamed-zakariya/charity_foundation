import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Login({setloginFlag, setsignupFlag, setuserlog}) {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");


    useEffect(() => {
        let fetchData = async () => {
            try {
                let response = await fetch('http://localhost:3005/home');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                let data = await response.json();
                console.log('Data:', data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchData();
    }, []);
    

    const handleNavigate = () => {
        setsignupFlag(true)
        setloginFlag(true)
    }

    const handleForm = async (event) => {
        event.preventDefault();
        console.log("clicked");
        console.log("username", username)

        // const data = {
        //     EMAIL: userEmail,
        //     PASSWORD: userPassword
        // }
        // console.log(data)
        try{
            const response = await fetch("/auth/login", {
                method:"post",
                headers:{ "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            // .then(response => response.json())
            // .then(data => {
            //     console.log("respondeeeee", data)
            // })
            if(response.ok){
                const sessionData = await response.json();
    
            // Store session data in local storage or cookies
            localStorage.setItem('sessionData', JSON.stringify(sessionData));
            setuserlog(true);
            setsignupFlag(false);
            setloginFlag(false);

    
            // Redirect or perform other actions
             } else {
            // Handle authentication failure
            alert("Invalid Username or Password")
            console.error('Authentication failed');
            }
        }
        catch (error) {
            console.error('Error during authentication:', error);
        }
        
    }
    return(
        <div className="body">
            <div className="login-form">
                <div className="logo-login">
                    {/* <!-- <i class="fa-solid fa-hand-holding-heart"></i> -->
                    <!-- <i class="fa-sharp fa-solid fa-hand-heart"></i> --> */}
                    <i className="fa-solid fa-hands-holding-child"></i>
                </div>
                <form className='form-editing' onSubmit={handleForm}>
                    <div className="heading-style-login">
                        <h1>ISYZ Foundation</h1>
                    </div>
                    <div className="form-outline mb-4" id="username">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" id="emailLogin" className="form-control" placeholder='Username' onChange={ (e) => setusername(e.target.value)}/>
                        {/* <label className="form-label" for="form2Example1">Email address</label> */}
                    </div>
                
                    <div className="form-outline mb-4" id="password">
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" id="passwordLogin" className="form-control" placeholder='Password' onChange={ (e)  => setpassword(e.target.value) } />
                        {/* <br></br> */}
                        {/* <label className="form-label" for="form2Example2">Password</label> */}
                    </div>
                
            
                    <div id="login-button">
                        <input type="submit" className="btn btn-primary btn-block mb-4" value={"sign in"} />
                    </div>
                    <div className="signup-button">
                        <span style= {{ fontSize: "small" }} >Create an account?</span>
                        {/* <a href="signup.html" target="_self"> Register </a> */}
                        <button onClick={handleNavigate} className="nav-link">
                            Register
                        </button>
                    </div>
                
                </form>
            </div>
            <div className="background-image-login">
                <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/11/charity-10.png" alt="" width="500px" height="700px" />
            </div>
        </div>
    )
}

export default Login;