import React from "react";
import { Link } from "react-router-dom";
import Button from '../components/Button';

 
const Login = () => {
    const handleClick = () => {
        console.log('Button was clicked!');
      };


    return (
        <div>
            <h1>Home Page</h1>
            <br />
            <Button onClick={handleClick} style={{ backgroundColor: 'blue', color: 'white' }}>
                Click Me!
            </Button>
        </div>
    );
};
 
export default Login;