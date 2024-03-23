import React from "react";
import "./NewUser.css";
function NewUser(){
    return(
        <div className="Login">
        <div className="facebook">
            <div className="facebooktext">
                facebook
            </div>
            <div className="title">
                Facebook helps you connect and share <br/>with the people in your life.

            </div>
        </div>
        <div className="logincontainer">
            <div className="logindetail">
                <input type="email" placeholder="Email address or phone number"></input><br/>
                <input type="password" placeholder="Password"></input><br/>
                <button className="btn">
                   Log in
                </button>
                <div className="forget">
                <a href="forget"> Forgot Password?</a><br/>
            </div>
            </div>
            
            <div className="create">
                <button className="btns">
                    Create New Account
                </button>

            </div>
            <p></p><br/>
            <div className="page">
                <a href="createpage">Create a Page</a> for a celebrity, brand or business.

            </div>

        </div>
</div>
    )
   
}
export default NewUser;