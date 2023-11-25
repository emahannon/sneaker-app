import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';
import './Login.css';
import SneakerMan from "../assets/img/SneakerWoman.svg"
import './Register.css';
 
const Register = () => {
  const navigate = useNavigate();
  const registerClick = () => {
    navigate("/mycollection")
  };


    return (
        <div classname="app">
          <div className="container"> 
            <div className="left-component">
                <div class="box">
                <img src={SneakerMan} alt="SneakerMan"/>

                </div>
            </div> 
            <div className="right-component">
                <div className="right-padding">
                    <div className="title">Register new sneakerhead</div>

                    <form>
                      <label className="form">Email</label>
                      <input type="text" id="fname" name="fname"></input>
                      <label className="form">Password</label>
                      <input type="text" id="lname" name="lname"></input>
                    </form>

                 
                    <div className="register-pad">
                    <Button onClick={registerClick} style={{ textAlign:'center', borderRadius: '12px', backgroundColor: 'black', border:'none', color: 'white', height:'48px' }}>
                    Register
                    </Button>
                    </div>

                    
                </div>
                  </div>
                <div>
  

            </div> 
          </div> 
        </div>
          
        // <div className='rowC'>
        //     <h1>Home Page</h1>
        //     <Button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white' }}>
        //         Click Me!
        //     </Button>
        // </div>
    );
};
 
export default Register;