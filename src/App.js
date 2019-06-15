import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments,
  faBullhorn,
  faPaintBrush,
  faCubes,
  faSlidersH,
  faChartLine } from '@fortawesome/free-solid-svg-icons'
import {faCopyright} from '@fortawesome/free-regular-svg-icons'
import Cookies from 'universal-cookie'
  const datas = [
    {
      title: "Consult",
      paragraph: "Co-create, design thinking, strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.",
      fa: faComments
    },
    {
      title: "Design",
      paragraph: "Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.",
      fa: faPaintBrush
    },
    {
      title: "Develop",
      paragraph: "Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.",
      fa: faCubes
    },
    {
      title: "Marketing",
      paragraph: "Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.",
      fa: faBullhorn
    },
    {
      title: "Manage",
      paragraph: "Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.",
      fa: faSlidersH
    },
    {
      title: "Evolve",
      paragraph: "Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.",
      fa: faChartLine
    }
  ]

  const cookies = new Cookies();
export class App extends React.Component {

  componentDidMount(){
    if(cookies.get("name")){
      document.getElementById("newsletter-panel").style.display = "none"
    }
    let element = document.getElementById("cookie-panel")
    window.onscroll = function(){
      console.log("tinggi",window.pageYOffset)
      console.log("total", document.body.clientHeight)
      console.log("tinggi 1 skrin", window.innerHeight)
      if(window.pageYOffset <=0) {
        element.style.position = "static"
      } else if (window !==0){
        element.style.position = "fixed"
      }
      if(window.pageYOffset >= (document.body.clientHeight-window.innerHeight)/3){
        document.getElementById("newsletter-panel").classList.add("newsletter-panel-mounting")
      }
    }
    
  }
  handleClose = () =>{
    let element = document.getElementById("cookie-panel")
    element.classList.toggle("hide")
    window.scrollTo(0,0)
    setTimeout(function(){
      element.style.display = "none"
    }, 1300)
  }
  newsletterClose = () => {
    let element =document.getElementById("newsletter-panel")
    element.classList.add("newsletter-panel-unmount")
    element.classList.remove("newsletter-panel-mountinga")
    cookies.set("name","clicked",{
      path:'/',
      expires: new Date(Date.now()+(10*60*1000))
    })
  }
  componentWillUnmount() {
    window.onscroll = null;
  }

  render(){
    return (
      <div className="bg-app" onScroll={this.handleScroll}>
        <div className="App">
          <div id="cookie-panel" className={`notification-panel`}>
            <div className="notification-panel-content">
              <p className="notification-panel-text">
                By accessing and using this website, you acknowledge that you have read and understand our <a href="/">Cookie Policy</a>, <a href="/">Privacy Policy</a>, and our <a href="/">Terms of Service</a>.
              </p>
              <button className="notification-panel-button" onClick={this.handleClose}>Got It!</button>
            </div>
          </div>
          <div className="hero-shot">
            <div className="hero-shot-content">
              <img src={require('./assets/img/y-logo-white.png')} alt="logo"/>
              <span className="jumbo-hello">
                Hello! I'm Nurhadi Wibowo
              </span>
              <span className="jumbo-skills">
                Consult, Design, and Develop Websites
              </span>
              <p className="jumbo-cta">
                Have something great in mind? Feel free to contact me.
              </p>
              <p className="jumbo-cta">
                I'll help you to make it happen.
              </p>
              <button>
                LET'S MAKE CONTACT
              </button>
            </div>
          </div>
          <div className="highlight-panel">
            <span>How Can I Help You?</span>
            <p>
              Our work then targeted, best practices outcomes social innovation synergy.<br/>
              Venture philanthropy, revolutionary inclusive policymaker relief.<br/>
              User-centered program areas scale.
            </p>
            <div className="card-section">
              {datas.map((data,index)=>
              <div className="card">
                <div className="card-header">
                  <span>
                    {data.title}
                  </span>
                  <FontAwesomeIcon icon={data.fa} className="fa-icon" />
                </div>
                <p>
                  {data.paragraph}
                </p>
              </div>
              )}
            </div>
          </div>
          <div id="newsletter-panel" className="newsletter-panel">
            <div className="newsletter-content">
              <button className="close-button" onClick={this.newsletterClose}>x</button>
              <span>Get latest updates in web technologies</span>
              <p>
                I write articles related to web technologies, such as design trends, development
                tools, UI/UX case studies and reviews, and more. Sign to my newsletter to get them all.
              </p>
              <div className="newsletter-cta">
                <input type="text" placeholder="Email address ..."/>
                <button className="newsletter-cta-button">Count me in!</button>
              </div>
            </div>
          </div>
          <div className="footer">
             <span><FontAwesomeIcon icon={faCopyright}/>​ 2019 Nurhadi Wibowo. All rights reserved.​</span>     
          </div>
        </div>
      </div>
      );
    }
  }

export default App;
