import { useState } from "react";
import Content from "./Content";
import Organizations from "./Organizations";

function Body({userlog, setuserlog}) {

    const [recipient, setrecipient] = useState("");
    const [amount, setamount] = useState(0);

    const handleDonation = async () => {
        // console.log("enterrrring")

        if(!userlog){
            alert('Please log in to perform this action.');
        }
        else if(recipient == "" && amount == 0){
            alert("-please select a recipient organization first \n-please enter a valid amount");
            
        }
        else if(amount == 0){
            alert('please enter a valid amount');
        }
        else if(recipient == ""){
            alert("-please select a recipient organization first");
        }

        try{
            const sessionData = localStorage.getItem('sessionData');
            var username = "";
            console.log("hhhh")
            if (sessionData) {
                const sessiondata = JSON.parse(sessionData);
                username = sessiondata.session.user;

                // Now you have the username
                console.log("hello", username);
            } else {
                // Handle the case when there is no session data
                console.error('No session data found');
            }
            const response = await fetch('/transfer/', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({"donor": username, "organization": recipient, "amount": amount})
            })
            if(response.ok){
                const dataRecevied = await response.json();
                if(dataRecevied.check1 && dataRecevied.check2){
                    alert("DONATION RECEVIED SUCCSSFULLY TO "+ recipient);
                }
            }
        }
        catch (error){
            console.log("error", error);
        }  

    }

    return(
        <div>
            <div class="sections">
                <div class="first-section">
                    <h1 style= {{ fontSize: "80px", color: "#0e7162"}} > Our Charity. Our Community. </h1>
                    <p style={{ fontSize: "small", textAlign: "center" }} >
                        At ISYZ Foundation, we lead the charge for positive change, serving as the vital link between compassionate donors and organizations in need. Committed to transparency and accountability, we directly channel donations to impactful initiatives, ensuring that every contribution creates a meaningful and lasting impact.
                        Join us on our mission to create a world where every act of generosity fuels transformative outcomes. Together, we are the driving force behind positive change and a brighter, more equitable future.
                    </p>
                    <div class="first-section-part2" style={{margin: "10px"}}>
                        <input type="number" placeholder="$Funds" style = {{ width: "350px" }} onChange={ (e) => { setamount(e.target.value) }}/>
                        <input type="text" placeholder="Select Recipient Organization" style = {{ width: "250px"}} disabled value={ recipient }/>
                        <button onClick={handleDonation}> Donate </button>
                    </div>
                    <div className="first-section-part3">
                        <Organizations userlog={userlog} setrecipient={setrecipient}/>
                    </div>
                </div>    
                <div class="second-section">
                    <img src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/11/charity-10.png" alt="" width="500px" height="700px" />
                </div>
            </div>
            {userlog && (
                <Content userlog={userlog} />
            )
            }
        </div>
    );
}

export default Body;
