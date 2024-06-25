import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Slideshow from "./Components/Achieve";
import { AiFillInstagram } from "react-icons/ai";
import { SiCodeforces } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMdCloseCircle } from "react-icons/io";
import { TbTriangleInverted } from "react-icons/tb";
import ScrollProgressBar from "./Components/ScrollProgressBar";
import './App.css';
import Projects from "./Components/Projects";

function App() {

  const [state, setState] =useState('state1');

  const handleClick = (state) => {
    switch(state){
      case 'state2':
        setState('state2')
        break
      case 'state3':
        setState('state3')
        break
      case 'state4':
        setState('state4')
        break
      case 'state5':
        setState('state5')
        break
      case 'state6':
        setState('state6')
        break
      case 'state7':
        setState('state7')
        break
      case 'state8':
        setState('state8')
        break
      case 'state9':
        setState('state9')
        break
      case 'state10':
        setState('state10')
        break
      case 'state11':
        setState('state11')
        break
    }
  }
  
  return (
    <div className="h-full w-full border-box">
      
      <div className="fixed top-0 right-0 left-0  z-40 bg-gray-800 ">
          <div className=" h-16 float-left w-full flex items-center " >
            <h1  className="font-formal text-3xl font-bold text-white">Sourabh Pargai</h1>
          </div> 

          <div>
            <ScrollProgressBar />
            <Navbar />
          </div>

      </div>


<div id="first" >
      <div className="area" id="about">
                <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
              </div >


              <div className="overflow-y-auto context absolute top-16 bottom-16 lg:overflow-hidden">
              
                  <img className="animateSpinX mt-16 md:h-80 h-60 mx-auto my-2" src="WhatsApp Image 2024-05-06 at 10.01.57 PM-modified.png"/>
                  <h1 className="sticky top-20 z-0 lg:w-3/4 lg:mx-auto text-center font-extrabold bg-gray-600 mx-2 text-white rounded-xl">About me</h1>
                  <div className="text-white font-bold font-lg lg:w-3/4 mx-auto rounded-xl px-4 border-8 border-t-0 border-left border-right border-bottom border-gray-400 border-solid" >
                    <i >This guy is under training phase right now, updating his skills on daily basis in order to compete with the upcoming industry needs and demands. This portfolio will give you the overview of whatever he had learned until now.</i>
                    <ul className="px-4" style={{listStyleType: "disc"}}>
                      <li>He strongly believe in two things, one is he himself and other his written code.</li>
                      <li>Pandemic situations had taught him how to survive in adverse situation and survive with minimum or almost no resources</li>
                    </ul>
                      - Always wander in search of Knowledge
                  </div>
                  <div className="flex justify-center"><a href="#projects"><TbTriangleInverted  style={{height: 50, width: 50, color: "white"}}/></a></div>
             
              </div>

</div>





<div>
  <h1 className="z-20 text-center font-extrabold mt-16 top-20 sticky bg-gray-600 mx-2 text-white rounded-xl" id="projects">Projects</h1>
  <Projects />
</div>


<div id="skills" className="pt-8 ">
<h1 className="z-30 text-center font-extrabold mt-16 top-20 sticky bg-gray-600 mx-2 text-white rounded-xl">Skills</h1>
      <h3 className="pt-8 text-xl text-green-600 text-center sm:mt-40 ">Click on each section to know more about skill-level</h3>
      {state==="state1" && (
                        <div id="container"  className="grid grid-cols-2 grid-rows-5 lg:grid-cols-4 lg:grid-rows-3 lg:float-left w-full justify-center items-center">
                        <div onClick={() => handleClick('state2')} id="s1" className="box bg-blue-100 h-24 rounded-3xl flex justify-center items-center lg:mx-10 mx-2 my-2 lg:w-3/4 border-2 border-black border-solid">
                          DSA with C++
                        </div>
                        <div onClick={() => handleClick("state3")} className="box bg-blue-100 h-24 rounded-3xl flex justify-center items-center lg:mx-10 mx-2 my-2 lg:w-3/4 border-2 border-black border-solid">HTML, CSS </div>
                        <div onClick={() => handleClick("state4")} className="box bg-blue-100 h-24 rounded-3xl flex justify-center items-center lg:mx-10 mx-2 my-2 lg:w-3/4 border-2 border-black border-solid">Javascript, React</div>
                        <div onClick={() => handleClick("state5")} className="box bg-blue-100 h-24 rounded-3xl flex justify-center items-center lg:mx-10 mx-2 my-2 lg:w-3/4 border-2 border-black border-solid">Python</div>
                        <div onClick={() => handleClick("state6")} className="box bg-blue-100 h-24 rounded-3xl flex justify-center items-center lg:mx-10 mx-2 my-2 lg:w-3/4 border-2 border-black border-solid">Java</div>
                        <div onClick={() => handleClick("state7")} className="box bg-blue-100 h-24 rounded-3xl flex justify-center items-center lg:mx-10 mx-2 my-2 lg:w-3/4 border-2 border-black border-solid">Git and Github</div>
                        <div onClick={() => handleClick("state8")} className="box bg-blue-100 h-24 rounded-3xl flex justify-center items-center lg:mx-10 mx-2 my-2 lg:w-3/4 border-2 border-black border-solid">Excel</div>
                        <div onClick={() => handleClick("state9")} className="box bg-blue-100 h-24 rounded-3xl flex justify-center items-center lg:mx-10 mx-2 my-2 lg:w-3/4 border-2 border-black border-solid" >SQL</div>
                        <div onClick={() => handleClick("state10")} className="box bg-blue-100 h-24 rounded-3xl flex justify-center items-center lg:mx-10 mx-2 my-2 lg:w-3/4 border-2 border-black border-solid">Tailwind CSS</div>
                        <div onClick={() => handleClick("state11")} className="box bg-blue-100 h-24 rounded-3xl flex justify-center items-center lg:mx-10 mx-2 my-2 lg:w-3/4 border-2 border-black border-solid">CMD commands</div>
                        </div>

      )}

      {state==="state2" &&(
                        <div className="mx-auto overflow-auto sm:w-3/4 w-full  mb-60 h-96 rounded-xl border-2 bg-blue-100 border-green-800">
                        <div className=" top-0 float-right" onClick={() => setState('state1')}><IoMdCloseCircle style={{height:40, width:40}}/></div>
                        <h2 className="font-bold italic ml-4"> Learnings</h2>
                        <ul className="px-4" style={{listStyleType: "disc"}}>
                          <li>Solved 50+ DSA questions on Codeforces</li>
                          <li>I cook Leetcode question everyday</li>
                          <li>DSA solved my own life problems</li>
                          <li>DSA is nothing without arrays</li>
                          <li>Most of the algorithm or problems revolve around arrays only</li>
                          <li>Memory management techniques using hashmap, dynamic programming etc.</li>
                          <li>Problem solving skills vary between easy-medium questions</li>
                          <li>Not a competitive coder yet, can't solve hard level questions</li>
                          <li>Have good knowledge in C++</li>
                          <li>Coding on C++ since Btech 1 year</li>
                        </ul>
                      </div>
      )}

      {state==="state3" && (
                <div className="mx-auto sm:w-3/4 w-full  mb-60 h-96 rounded-xl border-2 bg-blue-100 border-green-800">
                <div className="pl-4 top-0 float-right" onClick={() => setState('state1')}><IoMdCloseCircle style={{height:40, width:40}}/></div>
                <h2 className="font-bold italic ml-4"> Learnings</h2>
                <ul className="px-4" style={{listStyleType: "disc"}}>
                  <li>Can make responsive design without any help from net</li>
                  <li>This website is build from scratch without any code taken from net (except react tokens for icons at the contact section)</li>
                  <li>All the basics of HTML,CSS versions I have gone through</li>
                  <li>Can place component of a website at desired location</li>
                  <li>Working on backend part</li>
                  <li>Build abduction center app at college hackathon from scratch</li>
                  <li>Loves to combine both frontend and python as a backend</li>
                </ul>
              </div>
      )}

      
        {state==="state4" && (
                        <div className="mx-auto sm:w-3/4 w-full  mb-60 h-96 overflow-auto rounded-xl border-2 bg-blue-100 border-green-800">
                        <div className="pl-4 top-0 float-right" onClick={() => setState('state1')}><IoMdCloseCircle style={{height:40, width:40}}/></div>
                        <h2 className="font-bold italic ml-4"> Learnings</h2>
                        <ul className="px-4" style={{listStyleType: "disc"}}>
                          <li>This navigation bar is build from pure javascript logic(no bootstrap involved)</li>                         
<pre>
<code>
  {
    `
var i=1;
function myFunction() {
  if(i%2!==0){
      document.getElementById("abc")
      .style.display="grid";
      i++;
  }
  else{
      document.getElementById("abc")
      .style.display="none";
      i--;
  }
  document.getElementById("button")
  .classList.toggle("change");
}
    `
  }
</code>
</pre>
                          <li>Project building with react is my daily habit now</li>
                          <li>I am able to render these skills sections with the help of react useState switch function logic only</li>
<pre>
<code>
{
`
const [state, setState] =useState('state1');
const handleClick = () => {
  switch (currentState) {
    case 'state2':
      setState('state2');
      break;
    case 'state3':
      setState('state3');
      break;
    case 'state4':
      setState('state4');
      break;
  }
};

return (
  <div>
    <h1>Current State: {state1}</h1>
    {state === 'state1' && <div>State 1 Content</div>}
    {state === 'state2' && <div>State 2 Content</div>}
    {state === 'state3' && <div>State 3 Content</div>}
    <div onClick(()=>handleClick('state2'))>DSA with C++</>
  </div>
);
}
`
}
</code>
</pre>
                        </ul>
                      </div>
              )}

{
  state==='state5' && (
    <div className="mx-auto sm:w-3/4 w-full overflow-auto  mb-60 h-96 rounded-xl border-2 bg-blue-100 border-green-800">
    <div className="pl-4 top-0 float-right" onClick={() => setState('state1')}><IoMdCloseCircle style={{height:40, width:40}}/></div>
    <h2 className="font-bold italic ml-4"> Learnings</h2>
    <ul className="px-4" style={{listStyleType: "disc"}}>
      <li>Made a voice recognition Gym manager at 2021 when I was in 12 class from youtube</li>
      <li>Build disease prediction model on svm and logistic regression on flask local server</li>
      <li>Beginner in python</li>
      <li>Have basic knowledge in python such as list,dictionary,set etc.</li>
      <li>Learning from harvard university cs50 course on programming with python</li>
      <li>Keen interest in NLP</li>
      <li>To do1 : Strong LLM which understand natural vedic and sanskrit texts</li>
      <li>To do2 : AI website maker which can build website through simple human language commands</li>
    </ul>
  </div>
  )
}

{
  state==='state6' && (
    <div className="mx-auto sm:w-3/4 w-full overflow-auto  mb-60 h-96 rounded-xl border-2 bg-blue-100 border-green-800">
    <div className="pl-4 top-0 float-right" onClick={() => setState('state1')}><IoMdCloseCircle style={{height:40, width:40}}/></div>
    <h2 className="font-bold italic ml-4"> Learnings</h2>
    <ul className="px-4" style={{listStyleType: "disc"}}>
      <li>New to this language</li>
      <li>Learning rules of java language</li>
      <li>Did interface, abstraction and some of the hot topics of java</li>
      <li>Did Basics in java course on Infosys Springboard</li>
      <li>I Love the strict Object Oriented methodology of this language</li>
      <li>Will make java games in the near future</li>
    </ul>
  </div>
  )
}

{
  state==='state7' && (
    <div className="mx-auto sm:w-3/4 w-full overflow-auto  mb-60 h-96 rounded-xl border-2 bg-blue-100 border-green-800">
    <div className="pl-4 top-0 float-right" onClick={() => setState('state1')}><IoMdCloseCircle style={{height:40, width:40}}/></div>
    <h2 className="font-bold italic ml-4"> Learnings</h2>
    <ul className="px-4" style={{listStyleType: "disc"}}>
      <li>Did push request of my first repo to github through cmd git command</li>
      <li><code>{`git init-> git commit add. -> git commit -> git remote add origin url ->git remote add main url`}</code></li>
      <li>Did git pull to fetch and download content from remote repository and immediately update the local repository to match the content</li>
      <li><code>{`git pull -> git pull -all -> git pull origin master -> git pull origin master:feature -> git pull origin tag-name -> git pull origin commit-id`}</code></li>
    </ul>
  </div>
  )
}

{
  state==='state8' && (
    <div className="mx-auto sm:w-3/4 w-full overflow-auto  mb-60 h-96 rounded-xl border-2 bg-blue-100 border-green-800">
    <div className="pl-4 top-0 float-right" onClick={() => setState('state1')}><IoMdCloseCircle style={{height:40, width:40}}/></div>
    <h2 className="font-bold italic ml-4"> Learnings</h2>
    <ul className="px-4" style={{listStyleType: "disc"}}>
      <li>Did excel commands through w3 schools free course</li>
      <li>Excel fill used to fill the cells</li>
      <li>Excel formulas</li>
      <li>Some of the basics of filling form and handling data tasks are some of my key learnings</li>
    </ul>
  </div>
  )
}

{
  state==='state9' && (
    <div className="mx-auto sm:w-3/4 w-full overflow-auto  mb-60 h-96 rounded-xl border-2 bg-blue-100 border-green-800">
    <div className="pl-4 top-0 float-right" onClick={() => setState('state1')}><IoMdCloseCircle style={{height:40, width:40}}/></div>
    <h2 className="font-bold italic ml-4"> Learnings</h2>
    <ul className="px-4" style={{listStyleType: "disc"}}>
      <li>Working on SQL since 2021</li>
      <li>Love to play with queries on sql</li>
      <li>Some of the platforms which I used are Mysql and Oracle SQL</li>
      <li>Will be working on MongoDB with python</li>
      <li>Working on certification programs on MongoDB</li>
    </ul>
  </div>
  )
}

{
  state==='state10' && (
    <div className="mx-auto sm:w-3/4 w-auto overflow-auto  mb-60 h-96 rounded-xl border-2 bg-blue-100 border-green-800">
    <div className="pl-4 top-0 float-right" onClick={() => setState('state1')}><IoMdCloseCircle style={{height:40, width:40}}/></div>
    <h2 className="font-bold italic ml-4"> Learnings</h2>
    <ul className="px-4" style={{listStyleType: "disc"}}>
      <li>Reduced my lot of works using this skillset</li>
      <li>It took me around a week to make this website with tailwindcss</li>
      <li>It would had taken 3-4 weeks if I had done styling using CSS</li>
      <li>Example: To set height I used h-4 instead of height:20px</li>
      <li>Made easy responsive website </li>
      <li>Media screens was replaced by sm,md,lg and xl screen sizes</li>
      <li>This website is made on tailwindcss only</li>
    </ul>
  </div>
  )
}

{
  state==='state11' && (
    <div className="mx-auto sm:w-3/4 w-full  overflow-auto  mb-60 h-96 rounded-xl border-2 bg-blue-100 border-green-800">
    <div className="pl-4 top-0 float-right" onClick={() => setState('state1')}><IoMdCloseCircle style={{height:40, width:40}}/></div>
    <h2 className="font-bold italic ml-4"> Learnings</h2>
    <ul className="px-4" style={{listStyleType: "disc"}}>
      <li>I would directly right down some commands which I know and saved my lot of time</li>
      <li>Win+R : Opens cmd command when typed(cmd), can set environment variables when typed (sysdm.cpl)</li>
      <li>cd.. : get outside of folder</li>
      <li>mkdir : create folder</li>
      <li>copy cmd.txt demo.txt : Copy cmd file to demo file</li>
      <li>move style.css css : moves style.css file to css folder</li>
      <li>ping website : Check network connection to other ip hosts</li>
      <li>ipconfig /all : List out all ip's in the connection</li>
      <li>tracert site-name : Displays the route took to reach the destination server</li>
      <li>netstat : Displays network connection</li>
      <li>nslookup : Direct the name server for information on a destination domain</li>
      <li>sfc/scannow : System file checker</li>
      <li>DISM/Online/Cleanup-Image/CheckHealth : Replace CheckHealth with scanHealth or RestoreHealth for speeding up your system</li>
    </ul>
  </div>
  )
}
</div>








      <h1 className="mt-40 mb-36 z-40 text-center font-extrabold sm:mt-96 sticky top-20 sm:top-24 bg-gray-600 mx-2 text-white rounded-xl" id="achieve">Achievements</h1>


      
      <div className=" h-auto mx-4 rounded-3xl sm:w-1/2 sm:mx-auto">
          <Slideshow interval={2000} />
      </div>

      <div className="bg-gray-800 w-full h-24 mt-40 xl:mt-0 " id="contact">
      <a href="mailto:Sourabhpargai1234@gmail.com" className="flex justify-center text-white hover:text-blue-500">Personal Mail</a>
      <a href="mailto:Sourabh.16172@gnindia.dronacharya.info" className="flex justify-center text-white hover:text-blue-500">Official Mail</a>

      <div className="flex justify-evenly items-center">
        <a href="https://www.instagram.com/sourabhpargai1234/">
          <AiFillInstagram style={{height: 50, width: 50, color: 'white'}} onMouseOver={({target})=>target.style.color="lightblue"} onMouseOut={({target})=>target.style.color="white"}/>
        </a>
        <a href="https://codeforces.com/profile/sourabhpargai5907.12e">
          <SiCodeforces style={{height: 50, width: 50, color: 'white'}} onMouseOver={({target})=>target.style.color="lightblue"} onMouseOut={({target})=>target.style.color="white"}/>
        </a>
        <a href="https://www.linkedin.com/in/sourabh-pargai-2a830123b/">
          <FaLinkedin style={{height: 50, width: 50, color: 'white'}} onMouseOver={({target})=>target.style.color="lightblue"} onMouseOut={({target})=>target.style.color="white"}/>
        </a>
        <a href="https://github.com/Sourabhpargai1234">
          <FaGithub style={{height: 50, width: 50, color: 'white'}} onMouseOver={({target})=>target.style.color="lightblue"} onMouseOut={({target})=>target.style.color="white"}/>
        </a>
        <a href="https://leetcode.com/u/sourabhpargai1234/">
          <SiLeetcode style={{height: 50, width: 50, color: 'white'}} onMouseOver={({target})=>target.style.color="white"}/>
        </a>
      </div>
      </div>
    </div>
  );
}

export default App;
