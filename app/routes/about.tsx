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
        scc.setAttribute("style", "--clr-for-dots: rgba(0, 0, 0, 1)");
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
        <div id="second-card" className="bg-[#141414]/[.08] shadow-md dark:shadow-none dark:bg-white/[.0018]">
           <div className="second-card-content">
              <h2 className="text-green-400 text-2xl">Who are we?</h2>
              <p>We are a very <span>small company</span>, trying to do it's part to help
          the digital community at improving their productivity and relationship with tech.</p>
          <h2 className="text-green-400 text-2xl">How it began</h2>
          <p>This all started one day when I <span>(Cyberspark, AKA the founder)</span> founded the company RockBear with&nbsp;
            a friend. I was the only one who knew how to code, so I was the mind and the developer and he was&nbsp;
            the 'commercialist'. After some time and releases, I decided to found one sub-company: ANTIVE, to which I assigned&nbsp;
            the task of developing the website and some 3rd party tools for the company. I took the entire ownership of RockBear&nbsp;
            and gave ANTIVE to my friend. Unfortunatly none of these company got any further, so I decided to found this company,&nbsp;
            which is now ADSKO™ S.C.
          </p>
                     </div>
        </div>
     </div>);
  }

export default AboutUs;