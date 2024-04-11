import { IoMail, IoLocationSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";

function ContactUs({userlog, setuserlog}) {

    const checkLogging = () => {
        console.log("entered")
        if(!userlog){
            alert('Please log in to perform this action.');
        }
        else{

        }
    }

    return(
        <main className="con1">
            <div className="styling-contact">
                <h1 style={{   fontSize: "50px" }}>Get In Touch!</h1><br></br>
                <h6 style={{ fontWeight: "100" }}> We appreciate your generosity and interest in supporting our cause. Whether you have questions, feedback, or would like to inquire about your donations, we're here to help </h6>
            </div>  
            <div className="con2">
                <div className="con3">
                    <div className="con4">
                        <div className="address-style">
                            <div className="shapes">
                                <IoLocationSharp />
                            </div>
                            <div className="word">
                                <span> Address </span>
                                <p> 18 street MOhamed Fouad Gallal</p>
                            </div>   
                        </div>
                        {/* <h6> Contact information:</h6>  */}
                        <div className="address-style">
                            <div className="shapes">
                                <IoMail />
                            </div>
                            <div className="word">
                                <p> <a href="" style={{ fontWeight: "400" }}> support@yourcharityfoundation.org </a> </p>
                            </div>   
                        </div> 
                        <div className="address-style">
                            <div className="shapes">
                                <MdPhone />
                            </div>
                            <div className="word">
                                <p> +555 0123 456 </p>
                            </div>   
                        </div> 
                    </div>
                    {/* <p> <MdEmail />  <a href=""> support@yourcharityfoundation.org </a> </p>  */}
                    {/* <p>Phone:</p> */}
                </div>
                <div className="send-contact">
                        <h3 > Send Message</h3>
                        <input placeholder="Full Name"/>
                        <input placeholder="Email"/>
                        <input placeholder="Your Feedback"/>
                        <button type="submit" class="btn btn-primary" onClick={checkLogging}>Send</button>

                </div>
            </div>
            
        </main>
    );
}
export default ContactUs;