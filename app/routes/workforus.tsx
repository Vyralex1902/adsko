import { useEffect } from "react";
import '../styles/global.css';
import '../styles/workforus.css';

const WorkForUs = () => {
  useEffect(() => {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }

    console.log("Page loaded.");

    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((element) => {
      element.classList.add('darkmode-text-p');
    });

    const inputs = document.querySelectorAll('input');
    inputs.forEach((element) => {
      element.classList.add('darkmode-bg');
      element.classList.add('text-black');
      element.classList.add('dark:text-white');
      element.classList.add('placeholder:text-gray-800');
      element.classList.add('dark:placeholder:text-gray-400');
    });

    const labels = document.querySelectorAll('label');
    labels.forEach((element) => {
      element.classList.add('text-black');
      element.classList.add('dark:text-white');
    });
  });

  return (
    <div style={{ width: "100%", height: "100%" }} className="justify-center align-middle text-center darkmode-bg pt-20">
      <div><h1 className="text-black dark:text-white text-6xl">Work for us</h1></div>
      <div>
        <h2 className="text-gray-800 dark:text-gray-400">Would you like to work for us? You are in the right place!</h2>
      </div>
      
      <form>
        <div className="formbold-main-wrapper">
          <div className="bg-white dark:bg-[#1E1E1E]">
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              <div className="formbold-input-flex">
                <div>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Jane"
                  />
                  <label className="formbold-form-label"> First name </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Cooper"
                  />
                  <label className="formbold-form-label"> Last name </label>
                </div>
              </div>

              <div className="formbold-input-flex">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="jhon@mail.com"
                  />
                  <label className="formbold-form-label"> Mail </label>
                </div>
                <div>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="(319) 555-0115"
                  />
                  <label className="formbold-form-label"> Phone </label>
                </div>
              </div>

              <div className="formbold-textarea">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your message..."
                  className="text-black dark:text-white darkmode-bg resize-none placeholder:text-gray-800 dark:placeholder:text-gray-400"
                ></textarea>
                <label className="formbold-form-label"> Message </label>
              </div>
            </form>
          </div>
        </div>
      </form>
    </div>
  );
};
export default WorkForUs;