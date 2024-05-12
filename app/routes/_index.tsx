import type { MetaFunction } from "@remix-run/node";
import Swal from 'sweetalert2';
import { Reveal } from '../styles/reveal';
import { Link } from "@remix-run/react";
import inpageFooter from '../inpageFooter';
import { motion } from "framer-motion";
import modal from "../components/Modal/index";
// import {
//   SignOutButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/remix";

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
import empirestatebuilding from "../assets/empirestatebuilding.jpg"
import mirrored_empirestatebuilding from "../assets/empirestatebuilding-mirrored.jpg"
import heading_img from "../assets/heading-img.jpg"
import heading_img2 from "../assets/heading-img-2.jpg"

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button"
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import * as Accordion from '@radix-ui/react-accordion';
import * as Form from '@radix-ui/react-form';

export const meta: MetaFunction = () => {
  return [
    { title: "ADSKO" },
    { name: "description", content: "Welcome to ADSKO S.C.!" },
  ];
};

export default function Index() {
  useEffect(() => {
    const headingImageIndex = Math.floor(Math.random() * 3);
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      for (const scc of document.getElementsByClassName("second-card-content")) {
        scc.setAttribute("style", "--clr-for-dots: rgba(255, 255, 255, 0.1)");
      };
    }
    else {
      document.documentElement.classList.remove('dark');
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

          card.setAttribute("style", "--mouse-x: " + x + "px; --mouse-y:" + y + "px;");
        };
      }
    }

    const cards2Element = document.getElementById("cards2");
    if (cards2Element) {
      cards2Element.onmousemove = e => {
        for (const card of document.getElementsByClassName("card2")) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
          // const xPerc = x / rect.width;
          // const yPerc = y / rect.height;
          // const rx = (xPerc - 0.5) * 20;
          // const ry = (yPerc - 0.5) * 20;
          card.setAttribute("style", "--mouse-x: " + x + "px; --mouse-y:" + y + "px;"
            // + "--rotate-deg-x: " + rx + "deg; --rotate-deg-y:" + ry + "deg;"
          );
        };
      }
    }

    const toptextdiv = document.getElementById("top-text");
    const headingImage = document.getElementById("headingImage");
    const secondImage = document.getElementById("secondImage");
    if (toptextdiv && headingImage) {
      toptextdiv.setAttribute("style", "height: " + headingImage.offsetHeight + "px;");
    }

    console.log("Randomly chose image index of " + headingImageIndex);
    switch (headingImageIndex) {
      case 0:
        if (headingImage) {
          headingImage.setAttribute("src", empirestatebuilding);
        }
        if (mirrored_empirestatebuilding) {
          secondImage.setAttribute("src", mirrored_empirestatebuilding);
        }
        break;
      case 1:
        if (headingImage) {
          headingImage.setAttribute("src", heading_img);
        }
        break;
      case 2:
        if (headingImage) {
          headingImage.setAttribute("src", heading_img2);
        }
        break;
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

    const alert_user = (i: any, t1: any, t2: any) => {
      Swal.fire({
        icon: i,
        title: t1,
        text: t2,
      })
    }
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);


  return (
    // <main style={{ width: "100%", height: "100%" }}>
    <div id="maincontainer" style={{ width: "100%", height: "100%" }} className="flex flex-col justify-center align-middle text-center bg-white dark:bg-[#1E1E1E]">
      <div id="top-text" className="flex flex-col justify-center text-center align-top">
        <img id="headingImage" style={{ width: "100%", height: "100vh" }} className="absolute z-0 w-max h-auto"></img>
        <h1 id="codeluxe" className="text-white top-0 z-10 -mb-6">adsko</h1>
        <h2 id="slogan" className="z-10 text-2xl font-sans">One small step,&nbsp;
          <span className="underline text-2xl font-sans">to even more progress</span>.</h2>
        <div className='flex justify-center mt-7'>
          <div className='w-fit'>
            <a href='/'>
              <div className="getStartedbtn_div">
                <motion.button className="getStartedbtn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}
                //onClick={() => (modalOpen ? close() : open())}
                ><span></span><p data-text="go to docs" data-title="Get Started"></p></motion.button>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="bg-gray-500">
        <Button className="bg-blue-200 w-16 h-16"></Button>
      </div> */}

      <div className="w-full h-auto ">
        <div id="secondImageSection" className="flex flex-col justify-center text-center align-top">
          <img id="secondImage" style={{ width: "100%", height: "40vh" }} className="static z-0 w-max h-auto opacity-45"></img>
        </div>
        <h1 className="text-3xl">Subscribe to our newsletter</h1>
        <p>and stay updated</p>
        {/* <Accordion.Root
    className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root> */}

        <SubscribeForm />

      </div>


      <div className="flex flex-col h-auto align-middle text-center justify-center">
        {/* <video autoPlay muted loop><source src="https://youtu.be/Jox6R5-rIH0?list=PLdGJJ6BBahVodCt3Cet2bDmDSiRVJoE5G" type="video/mp4"></source></video> */}
        <ShardCard />
        <div className="-mb-12"><h1 className="text-gray-800 dark:text-gray-400 font-bold text-lg">Our software is...</h1></div>
        <GlowCards />
        <div className="-mt-12"><h5 className="text-gray-800 dark:text-gray-400 dark:text-opacity-50 font-bold text-[14px]">Move your pointer over the cards</h5></div>
        <div id="anim-in-left" className="mt-10 mb-2"><h1 className="text-[#ff20b8] font-bold text-lg">We primarily code using:</h1></div>
        <CodingLangsDisplay img_csharp={img_csharp} img_css={img_css} img_html={img_html} img_net={img_net} img_react={img_react} img_remix={img_remix} img_ts={img_ts} />

        <div id='card2-body' className="bg-[#1E1E1E] dark:bg-white/[.025]">
          <div id="cards2">
            <div className="card2">
              <div className="card2-content">
                <div className="card2-image">
                  <FaHtml5 className="i" />
                </div>
                <div className="card2-info-wrapper">
                  <div className="card2-info">
                    <div className="card2-info-title">
                      <h3>Productivity+</h3>
                      <h4>To unlock your productivity potential</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[800px]"></div>
      </div>

      {/* <div>
        <SignedIn>
        <p>You are signed in!</p>
        <div>
          <p>View your profile here 👇</p>
          <UserButton />
        </div>
        <div>
          <SignOutButton />
        </div>
      </SignedIn>
      <SignedOut>
        <p>You are signed out</p>
        <div>
          <Link to="/sign-in">Go to Sign in</Link>
        </div>
        <div>
          <Link to="/sign-up">Go to Sign up</Link>
        </div>
      </SignedOut>
        </div> */}

      <footer>
        <div className="backdrop-blur flex bottom-0 flex-col  h-16 text-gray-600 dark:text-gray-300">
          <ul className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 h-16">
            <li className="static left-0 text-left ml-4">
              <a aria-label="Surface Laptop Studio 2 Le novità" href="https://">mail@maildom.com</a>
            </li>
          </ul>
        </div>
        <label className="text-black dark:text-white">© ADSKO™ 2024</label>
        <div id="bottomtextdiv">
          <h1 id="codeluxe-max" className="text-darkprimary dark:text-white -my-20">adsko</h1>
        </div>
      </footer>

      {/* {modalOpen && <modal modalOpen={modalOpen} handleClose={close}></modal>} */}
    </div>
  );
}

function ShardCard({ }) {
  return (<div id='second-card-body'>
    <div id="second-card" className="bg-[#1E1E1E]/[.08] shadow-md dark:shadow-none dark:bg-white/[.0018]">
      <div className="second-card-content">
        <h1 className="darkmode-text-p">Our Products are for you</h1>
        <p className="darkmode-text-p">We brought you all the QuantumKillers, RockBear and ANTIVE products in one place
          + our newer producs, complitely made by us.
        </p>
      </div>
    </div>
  </div>);
}

function GlowCards({ }) {
  return (
    <div id='card-body' className="bg-[#1E1E1E] dark:bg-white/[.025]">
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

function CodingLangsDisplay({ img_csharp, img_css, img_html, img_net, img_react, img_remix, img_ts }: { img_csharp: any, img_css: any, img_html: any, img_net: any, img_react: any, img_remix: any, img_ts: any }) {
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

function SubscribeForm({ }) {
  return (<Form.Root className="w-[260px] dark:text-white text-black">
    <Form.Field className="grid mb-[10px]" name="email">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white text-black">Email</Form.Label>
        <Form.Message className="text-[13px] text-red-500 opacity-[0.8]" match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message className="text-[13px] text-red-500 opacity-[0.8]" match="typeMismatch">
          Please provide a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="dark:text-black text-white box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6" type="email" required />
      </Form.Control>
    </Form.Field>
    <Form.Field className="grid mb-[10px]" name="question">
      <div className="flex items-baseline justify-between">
        <Form.Label className="text-[15px] font-medium leading-[35px] dark:text-white text-black">
          Question
        </Form.Label>
        <Form.Message className="text-[13px] text-red-500 opacity-[0.8]" match="valueMissing">
          Please enter a question
        </Form.Message>
      </div>
      <Form.Control asChild>
        <textarea className="dark:text-black text-white box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none" required />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <button className="text-purple-700 box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] dark:bg-white bg-gray-500 px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px] ">
        Post question
      </button>
    </Form.Submit>
  </Form.Root>);
}

