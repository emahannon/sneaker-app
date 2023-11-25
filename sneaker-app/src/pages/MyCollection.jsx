import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';
// import './Login.css';
import SneakerMan from "../assets/img/SneakerWoman.svg"
import './MyCollection.css';
 
const MyCollection = () => {
    const handleClick = () => {
        console.log('Button was clicked!');
      };


    return (

        // we can put the header bc it will be permanently on the page


        <div classname="app">
          <div className="container"> 
            <div className="left-component">
                <h1>Your Collection</h1>
            </div> 
            <div className="right-component">



                    

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
 
export default MyCollection;