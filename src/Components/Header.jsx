import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../photos/main.jpeg'

function Header({ setsignupFlag, setloginFlag, userlog, setuserlog }) {
    const [scrollHome, setscrollHome] = useState(true);
    const [contactState, usecontactState] = useState(['0px', 'black', '3px']);
    const [homeState, usehomeState] = useState(['0px', 'black', '3px']);
    const [aboutState, useaboutState] = useState(['0px', 'black', '3px']);
    const [loggingOut, setLoggingOut] = useState(false);

    const handleNavigate = () => {
        setloginFlag(true);
        setsignupFlag(false);
    };

    const scrollByHome = () => {
        usehomeState(["3px solid hsl(205, 78%, 60%)", "hsl(205, 78%, 60%)", "3px"]);
        usecontactState(['0px', 'black', '3px']);
        useaboutState(['0px', 'black', '3px']);

        if (scrollHome) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const usecontact = () => {
        usecontactState(["3px solid hsl(205, 78%, 60%)", "hsl(205, 78%, 60%)", "3px"]);
        usehomeState(['0px', 'black', '3px']);
        useaboutState(['0px', 'black', '3px']);
    };

    const useabout = () => {
        useaboutState(["3px solid hsl(205, 78%, 60%)", "hsl(205, 78%, 60%)", "3px"]);
        usecontactState(['0px', 'black', '3px']);
        usehomeState(['0px', 'black', '3px']);
    };

    const handleLogOut = () => {
        // Show loading state
        setLoggingOut(true);

        // Simulate a delay (you can replace this with your actual logout logic)
        setTimeout(() => {
            // Remove session data and update state
            localStorage.removeItem('sessionData');
            setloginFlag(false);
            setsignupFlag(false);
            setuserlog(false);
            // Hide loading state
            setLoggingOut(false);
        }, 2000); // Replace 2000 with the actual time it takes to log out
    };

    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom fixed-top bg-white">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32">
                    <use xlinkHref="#bootstrap"></use>
                </svg>
                <img src={img} alt="" width="80px" height="50px" style={{ borderRadius: "50px" }} />
                <span className="fs-4" style={{ fontWeight: "bold" }}>ISYZ Foundation</span>
            </a>

            <ul className="nav nav-pills" id="navBar">
                <li className="nav-item">
                    <Link to='/charity_foundation' className="nav-link" onClick={scrollByHome} style={{ cursor: "pointer" }}>
                        <span style={{ borderBottom: homeState[0], color: homeState[1], margin: homeState[2] }}> Home </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link" onClick={usecontact}>
                        <span style={{ borderBottom: contactState[0], color: contactState[1], margin: contactState[2] }}> Contact Us </span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" id="about" className="nav-link" onClick={useabout}>
                        <span style={{ borderBottom: aboutState[0], color: aboutState[1], margin: aboutState[2] }}> About </span>
                    </Link>
                </li>
                {!userlog && (
                    <li className="nav-item">
                        <button onClick={handleNavigate} className="nav-link">
                            Login
                        </button>
                    </li>)
                }
                {userlog && (
                    <li className="nav-item">
                        <button onClick={handleLogOut} className="nav-link">
                            {loggingOut ? 'Logging Out...' : 'LogOut'}
                        </button>
                    </li>
                )}
            </ul>
        </header>
    );
}

export default Header;
