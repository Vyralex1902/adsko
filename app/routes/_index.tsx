import type { MetaFunction } from "@remix-run/node";
import Swal from 'sweetalert2'; 
import {Reveal} from '../styles/reveal';
import inpageFooter from '../inpageFooter';

import '../styles/global.css';
import '../styles/home.css';
import "animate.css/animate.min.css";

import img_csharp from "../assets/csharp.png"
import img_css from "../assets/css.png"
import img_html from "../assets/html.png"
import img_net from "../assets/net.png"
import img_react from "../assets/react.png"
import img_remix from "../assets/remix.png"
import img_ts from "../assets/ts.png"

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "ADSKO" },
    { name: "description", content: "Welcome to ADSKO S.C.!" },
  ];
};

export default function Index() {
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
    //alert_user('info', 'Hey!', "If you're on mobile, we advise you to use the destkop view or just use your PC. If you use your mobile device you will miss out on many cool animations and effects.")
    
    const cardsElement = document.getElementById("cards");
    if (cardsElement) {
        cardsElement.onmousemove = e => {
            for (const card of document.getElementsByClassName("card")) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;
    
                card.setAttribute("style", "--mouse-x: "+ x +"px; --mouse-y:"+ y+"px;");
            };
        }
    }

    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add("show");
    //     }
    //     else{
    //       entry.target.classList.remove("show");
    //     }
    //   });
    // })

    // const hiddenElements = document.querySelectorAll('#hidden');
    // hiddenElements.forEach((element) => {
    //   observer.observe(element);
    // });

    const alert_user = (i:any,t1:any,t2:any) => {
      Swal.fire({
        icon: i,
        title: t1,
        text: t2,
      })
    }
  }, []); 

  return (
    // <main style={{ width: "100%", height: "100%" }}>
      <div style={{ width: "100%", height: "100%" }} className="justify-center align-middle text-center bg-white dark:bg-[#141414]">
        <div id="top-text" className="flex flex-col justify-center align-middle text-center mb-10">
          <h1 id="codeluxe" className="top-0 text-darkprimary dark:text-white pt-14 -mb-6">adsko</h1>
          <h2 id="slogan" className="text-gray-900 dark:text-gray-500 text-2xl font-sans">Small steps accumulate,&nbsp;
          <span className="underline text-gray-900 dark:text-gray-500 text-2xl font-sans">take the first one now</span>.</h2>
        </div>

        <div className='flex justify-center'>
         <div className='w-fit'>
         <a href='#sect2'> 
          <div className="getStartedbtn_div">
            <button className="getStartedbtn"><span></span><p data-text="go to docs" data-title="Get Started"></p></button>
          </div>
         </a>
         </div>
         </div>

        <div className="flex flex-col h-auto align-middle text-center justify-center">
          <ShardCard     />
          <div className="-mb-12"><h1 className="text-gray-800 dark:text-gray-400 font-bold text-lg">Our software is...</h1></div>
          <GlowCards     />
          <div className="-mt-12"><h5 className="text-gray-800 dark:text-gray-400 dark:text-opacity-50 font-bold text-[14px]">Move your pointer over the cards</h5></div>
          <div id="anim-in-left" className="mt-10 mb-2"><h1 className="text-[#ff20b8] font-bold text-lg">We primarily code using:</h1></div>
          <CodingLangsDisplay   img_csharp={img_csharp} img_css={img_css} img_html={img_html} img_net={img_net} img_react={img_react} img_remix={img_remix} img_ts={img_ts}  />
          <div className="h-[800px]"></div>
        </div>

        <footer>
          <div className="backdrop-blur flex bottom-0 flex-col  h-16 text-gray-600 dark:text-gray-300">
            <ul className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 h-16">
              <li className="static left-0 text-left ml-4">
                  <a aria-label="Surface Laptop Studio 2 Le novità" href="https://">mail@maildom.com</a>
              </li>
              <li className="static text-center">
                  <a aria-label="Surface Laptop Go 3 Le novità" href="https://">© ADSKO™ 2024</a>
              </li>
            </ul>
          </div>
        </footer>
    </div>
  );
}

function ShardCard({}) {
  return (<div id='second-card-body'>
        <div id="second-card" className="bg-[#141414]/[.08] shadow-md dark:shadow-none dark:bg-white/[.0018]">
           <div className="second-card-content">
              <h1 className="darkmode-text-p">Our Products are for you</h1>
              <p className="darkmode-text-p">We brought you all the QuantumKillers, RockBear and ANTIVE products in one place
                + our newer producs, complitely made by us.
              </p>
           </div>
        </div>
     </div>);
  }

    function GlowCards({}) {
      return (
      <div id='card-body' className="bg-[#141414] dark:bg-white/[.025]">
            <div id="cards">
               <div className="card">
                  <div className="card-content">
                     <div className="card-image">
                        <FaHtml5 className="i" />
                     </div>
                     <div className="card-info-wrapper">
                        <div className="card-info">
                           <div className="card-info-title">
                              <h3>Productivity+</h3>
                              <h4>To unlock your productivity potential</h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="card">
                  <div className="card-content">
                     <div className="card-image">
                        <FaCss3 className="i" />
                     </div>
                     <div className="card-info-wrapper">
                        <div className="card-info">
                           <div className="card-info-title">
                              <h3>User-Friendly</h3>
                              <h4>You are our priority</h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="card">
                  <div className="card-content">
                     <div className="card-image">
                        <IoLogoJavascript className="i" />
                     </div>
                     <div className="card-info-wrapper">
                        <div className="card-info">
                           <div className="card-info-title">
                              <h3>Simple</h3>
                              <h4>Simplicity + Efficiency makes the deal</h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="card">
                  <div className="card-content">
                     <div className="card-image">
                        <FaReact className="i" />
                     </div>
                     <div className="card-info-wrapper">
                        <div className="card-info">
                           <div className="card-info-title">
                              <h3>Optimized</h3>
                              <h4>For Win11 & Win10</h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="card">
                  <div className="card-content">
                     <div className="card-image">
                        <TbBrandVscode className="i" />
                     </div>
                     <div className="card-info-wrapper">
                        <div className="card-info">
                           <div className="card-info-title">
                              <h3>Offline</h3>
                              <h4>96% works offline</h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                    {/* @ts-ignore  */}
                      <span><svg fill="#ffffff40" width="70px" height="70px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" id="1086452535" duda_id="1086452535" className="svg u_1086452535" data-icon-custom="true" data-icon-name="feather-wing-svgrepo-com.svg"> <title>feather-wing</title> 
                      <path d="M28.665 25.537c-1.966-1.094-3.116-2.962-3.232-4.673-0.619-9.164-15.889-10.357-23.662-19.509l-0 0c0.403 11.661 13.204 11.604 20.744 17.449-4.879-2.113-12.876-1.649-18.664-5.404 2.7 8.775 12.332 5.886 19.406 8.271-4.212-0.411-9.768 1.968-15.020 0.086 4.638 7.31 10.654 2.427 16.483 2.47-2.94 0.749-5.977 4.025-10.036 3.718 4.946 4.76 7.536 0.139 11.079-1.633-0.357 0.425-0.583 0.967-0.61 1.565-0.064 1.443 1.054 2.665 2.497 2.73s2.665-1.054 2.73-2.497c0.052-1.169-0.672-2.193-1.716-2.574z"></path> 
                      </svg></span>
                    </div>
                     <div className="card-info-wrapper">
                        <div className="card-info">
                           <div className="card-info-title">
                              <h3>Light</h3>
                              <h4>To save storage space</h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>);
      }

      function CodingLangsDisplay({img_csharp, img_css, img_html, img_net, img_react, img_remix, img_ts}:{img_csharp:any, img_css:any, img_html:any, img_net:any, img_react:any, img_remix:any, img_ts:any}) {
        return (
          <div className="mb-10" id="">
            <ul id="CodingLangsDisplay_ul">
              <li className="mx-2 delay-0" id="anim-in-left">
                <img src={img_csharp} />
              </li>
              <li className="mx-2 delay-100" id="anim-in-left">
                <img src={img_css} />
              </li>
              <li className="mx-2 delay-150" id="anim-in-left">
                <img src={img_html} />
              </li>
              <li className="mx-2 delay-200" id="anim-in-left">
                <img src={img_net} />
              </li>
              <li className="mx-2 delay-250" id="anim-in-left">
                <img src={img_react} />
              </li>
              <li className="mx-2 delay-300" id="anim-in-left">
                <img src={img_remix} />
              </li>
              <li className="mx-2 delay-350" id="anim-in-left">
                <img src={img_ts} />
              </li>
            </ul>
          </div>);
      }