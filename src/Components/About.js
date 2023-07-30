import React,{useState} from 'react';
// import Resume from '../Assets/Resume.pdf'
import {FaNodeJs , FaCss3,FaJs,FaHtml5,FaGitAlt,FaReact} from "react-icons/fa"
import '../Styles/About.css';


export default function About() {
  const[showSkills, setShowSkills] = useState(false)
  
  const toShow = () => {
    showSkills ? setShowSkills(false) : setShowSkills(true)
  }
  const AboutMe = () =>{
    return (
      <div className='about__content'>
      <p> No, I do not play the drums, but I am a violinist.
      <br/><br/> 
      I am Latin Carribbean living in Florida, and I adore animals. A few passions of mine are gardening, singing Opera and crocheting; also I love to rock climb.
      My love for code forged when I was working in healthcare. 
      I was using a severely out-dated pen and paper record system, 
      and I figured there had to be an easier way. That's when I decided to draw a sketch of what I felt the application should look like, and the managerial team got right on it. After seeing my idea come to life, I decided to dedicated myself to learning how to do it on my own.</p>
      <button id='skills' onClick={toShow}> My Skills </button>
      </div>
    )
      const Skills = () =>{
        return (
          <div className = 'skill__content'>
            <div className= 'text'></div>
            <div className= 'cube'>
              <div className= 'cube__spinner'>
                <div className= 'cube__faceOne'>
                  <FaNodeJs color='#00FF00'/>
                  </div>
                <div className= 'cube__faceTwo'>
                  <FaCss3 color='#5ED4F4'/>
                  </div>
                <div className= 'cube__faceThree'>
                  <FaJs color='#EFD81D'/>
                  </div>
                <div className= 'cube__faceFour'>
                  <FaHtml5 color='#F06529'/>
                  </div>
                <div className= 'cube__faceFive'>
                  <FaGitAlt color='#EC4D28'/>
                  </div>
                <div className= 'cube__faceSix'>
                  <FaReact color='#28A4D9'/>
                  </div>
                  </div>
        </div>
        <div className='centered'>
        <ul>
          <li> HTML5 </li>
          <li> CSS </li>
          <li> React </li>
          <li> JavaScript </li>
          <li> Git </li>
          <li> Node </li>
          <li> Vite </li>
          <li> Express </li>
          <li> MongoDB </li>
          <li> SQL </li>
          <li> Jira </li>
          <li> Vercel </li>
          </ul>
        <button id='aboutBtn' onClick={toShow}> About Me </button>
        </div>
      </div>
    )
  }
  return (
    <section id='about' className= 'aboutBody'>
      <h3> 'A good programmer looks both ways before crossing a one way street' </h3>
      <div className='about__container'>
        <div className='about__front'>
          <div className='about__image'></div>
        {showSkills ? <Skills/> : <AboutMe/>}
        </div>
         </div>
          {/* <a className="about__resume"  target='_blank' rel="noreferrer" href={Resume}>View My Resume </a> */}
    </section>
  )
}
}