import './Navbar.css';
import React, { useEffect } from 'react';


function Navbar() {
    var i=1;
    function myFunction() {
        if(i%2!==0){
            document.getElementById("abc").style.display="grid";
            i++;
        }
        else{
            document.getElementById("abc").style.display="none";
            i--;
        }
        document.getElementById("button").classList.toggle("change");
    }
    

    return (
        <div>
            <div id="abc" className="hidden sm:inline text-white font-bold">
                <a href="#about" className=" mx-2 sm:border-none border-gray-300 text-center w-96 hover:text-green-400 ">About</a>
                <a href="#projects" className="sm:border-none  border-gray-300 text-center mx-2 hover:text-green-400 ">Projects</a>
                <a href="#skills" className="sm:border-none  border-gray-300 text-center mx-2 hover:text-green-400 ">Skills</a>
                <a href="#achieve" className="sm:border-none border-gray-300 text-center mx-2 hover:text-green-400 ">Achievements</a>
                <a href="#contact" className="sm:border-none  border-gray-300 text-center mx-2 hover:text-green-400 ">Contact</a>
            </div>

            <a id="button" className='icon' onClick={() => myFunction()}>
                <div className="sm:hidden fixed top-2 right-2 mr-2 mt-2 items-center cursor-pointer">
                    <div className="bar1 bg-white w-10 h-2 my-1"></div>
                    <div className="bar2 bg-white w-10 h-2 my-1"></div>
                    <div className="bar3 bg-white w-10 h-2 my-1"></div>
                </div>
            </a>
        </div>
    );
}

export default Navbar;
