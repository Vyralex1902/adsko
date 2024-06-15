import { useEffect } from "react";
import '../styles/global.css';
import '../styles/about.css';

const AboutUs = () => {
  useEffect(() => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {document.documentElement.classList.add('dark'); 
      for (const scc of document.getElementsByClassName("second-card-content")) {
        scc.setAttribute("style", "--clr-for-dots: rgba(255, 255, 255, 0.1)");
      };
    }
    else
    {document.documentElement.classList.remove('dark');
      for (const scc of document.getElementsByClassName("second-card-content")) {
        scc.setAttribute("style", "--clr-for-dots: rgba(0, 0, 0, 0.1)");
      };
    }
    
    console.log("Page loaded.");
    
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((element) => {
      element.classList.add('darkmode-text-p');
    });
    
  });
  
  return (
    <div style={{ width: "100%", height: "100%" }} className="justify-center align-middle text-center darkmode-bg pt-20">
    <div><h1 className="text-black dark:text-white text-6xl">About us</h1></div>
    <div className="my-10"><ShardCard     /></div>
    </div>
  );
};

function ShardCard({}) {
  return (<div id='second-card-body'>
    <div id="second-card" className="bg-[#1E1E1E]/[.08] shadow-md dark:shadow-none dark:bg-white/[.0018]">
    <FirstCard     />
    </div>
    </div>);
  }
  
  
  function FirstCard({}) {
    return (<div className="second-card-content">
      <h2 className="text-green-400 text-2xl">Who are we?</h2>
      <p id="texts">We are a <span className="underline darkmode-text-p">very small company</span>, dedicated to enhancing the digital community's productivity and fostering healthier relationships with technology.</p>
      <h2 className="text-green-400 text-2xl">How it began</h2>
      <p id="texts">This all started one day when I <span className="text-gray-600 dark:text-gray-400">(Cyberspark, AKA the founder)</span> founded the company RockBear with
      a friend. I was the only one who knew how to code, so I was the mind and the developer and he was
      the 'commercialist'. After some time and releases, I decided to found one sub-company: ANTIVE, to which I assigned
      the task of developing the website and some 3rd party tools for the company. I took the entire ownership of RockBear
      and gave ANTIVE to my friend. Since we couldn't get the small team to work together the right way, we founded
      QuantumKillers, a new company that would wrap all the team together to work on a single app per time.
      Unfortunatly none of these company got far, so I decided to found this company
      which is now ADSKO™ S.C. and get rid of all the others.
      </p>
      </div>);
    }
    export default AboutUs;