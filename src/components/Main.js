import React from "react";
import image_intro from "../images/image-intro-mobile.jpg";
import image_intro_desktop from "../images/image-intro-desktop.jpg";
import pattern_intro_right_mobile from "../images/bg-pattern-intro-right-mobile.svg";
import pattern_intro_right_desktop from "../images/bg-pattern-intro-right-desktop.svg";
import pattern_intro_left_mobile from "../images/bg-pattern-intro-left-mobile.svg";
import pattern_intro_left_desktop from "../images/bg-pattern-intro-left-desktop.svg";
import pattern_how_we_work_mobile from "../images/bg-pattern-how-we-work-mobile.svg";
import pattern_how_we_work_desktop from "../images/bg-pattern-how-we-work-desktop.svg";

function Main() {
  return (
    <div className="text-center mx-auto xl:mx-auto lg:w-full">
      <div className=" lg:purple lg:relative mx-auto">
        <img
          className="mx-auto w-full lg:mx-auto lg:hidden"
          src={image_intro}
          alt="intro_mobile"
        />

        {/* --------------Humanizing your insurance mobile------------------------------------------- */}
        <div className="relative purple lg:hidden">
          <h1 className="relative z-30 pt-20 pb-10">
            Humanizing your insurance.
          </h1>
          <p className="px-5">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your loved ones are protected.
          </p>
          <a className="button" href="#">
            VIEW PLANS
          </a>
          <img
            className="absolute left-0 top-0"
            src={pattern_intro_left_mobile}
            alt="pattern_intro_right_mobile"></img>
          <img
            className="absolute right-0 top-[370px] md:top-[230px]"
            src={pattern_intro_right_mobile}
            alt="pattern_intro_right_mobile"></img>
        </div>

        {/* --------------Humanizing your insurance DESKTOP------------------------------------------- */}
        <div className="hidden purple mx-auto lg:flex lg:container lg:px-28 xl:px-28">
          <img
            className="absolute right-0 top-0 z-20 lg:max-w-[20%] xl:max-w-[25%]"
            src={pattern_intro_right_desktop}
            alt="pattern_intro_right_desktop"></img>
          <img
            className="absolute left-0 top-[450px] lg:top-[300px] xl:top-[450px] z-20 lg:max-w-[10%] xl:max-w-[15%]"
            src={pattern_intro_left_desktop}
            alt="pattern_intro_left_desktop"></img>
          <div className="flex flex-row relative mx-auto pb-0">
            <div className="w-6/12 text-left pr-5 lg:pt-0 xl:pt-0">
              <div className="hidden lg:block w-4/12 border-b-2 border-y-white"></div>

              <h1 className="pt-12 pb-4">
                Humanizing <br />
                your insurance.
              </h1>
              <p className="">
                Get your life insurance coverage easier and faster. We blend our
                expertise and technology to help you find the plan that's right
                for you. Ensure you and your loved ones are protected.
              </p>
              <a className="button" href="#">
                VIEW PLANS
              </a>
            </div>

            <div className="w-6/12 dekstop_intro absolute top-0 right-0">
              {/*     <div className="absolute top-0 right-0"> */}
              <div className="">
                <img
                  className="w-full"
                  src={image_intro_desktop}
                  alt="intro_mobile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------We're different----------------------------------------------------- */}
      <div className="py-32 px-5 xl:pt-72 lg:mx-auto md:container md:mx-auto lg:container lg:px-28 xl:px-28 xl:mx-auto">
        <div
          className=" xl:hidden w-4/12 pb-14 border-b-2 border-y-violet-200
          mx-auto"></div>
        <div className="hidden xl:block w-2/12 pb-14 border-b-2 border-y-violet-200"></div>

        <h1 className="pt-20">We're different</h1>

        <div className="xl:flex flex-row xl:text-left xl:pt-20">
          {/* ----------Snappy Process------------------------------*/}
          <section className="xl:pr-7">
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
              <g fill="none" fillRule="evenodd">
                <circle cx="43" cy="43" r="43" fill="#96A9C6" />
                <path
                  fill="#FFF"
                  fillRule="nonzero"
                  d="M32 59h1.195l21.072-20.146c.276-.356.123-.534-.46-.534H45.11l9.158-10.786c.276-.356.061-.534-.612-.534h-11.67c-.337 0-.613.119-.888.356l-8.515 14.645c-.061.356.122.534.582.534h8.423L32 59z"
                />
              </g>
            </svg>{" "}
            <h2>Snappy Process</h2>
            <p>
              Our application process can be completed in minutes, not hours.
              Don't get stuck filling in tedious forms.
            </p>
          </section>

          {/* ----------Affordable Prices------------------------------*/}
          <section className="xl:pr-7">
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
              <g fill="none" fillRule="evenodd">
                <circle cx="43" cy="43" r="43" fill="#96A9C6" />
                <path
                  fill="#FFF"
                  fillRule="nonzero"
                  d="M43 27c-8.836 0-16 7.164-16 16s7.164 16 16 16c8.838 0 16-7.164 16-16s-7.162-16-16-16zm4.363 22.178c-.787.883-1.924 1.402-3.41 1.558V53H42.06v-2.252c-2.479-.254-4.012-1.695-4.604-4.32l2.93-.764c.271 1.65 1.17 2.475 2.695 2.475.713 0 1.24-.176 1.576-.53a1.79 1.79 0 00.504-1.279c0-.518-.168-.91-.504-1.176-.336-.267-1.084-.605-2.242-1.015-1.04-.362-1.855-.717-2.441-1.073a4.032 4.032 0 01-1.428-1.48c-.365-.637-.549-1.379-.549-2.223 0-1.107.328-2.105.98-2.992.653-.885 1.68-1.426 3.083-1.623V33h1.894v1.748c2.117.254 3.488 1.451 4.111 3.594l-2.609 1.07c-.51-1.469-1.295-2.203-2.361-2.203-.535 0-.965.164-1.287.492a1.636 1.636 0 00-.487 1.194c0 .476.157.841.47 1.097.31.254.98.569 2.003.946 1.125.41 2.008.798 2.647 1.164a4.16 4.16 0 011.533 1.513c.38.645.572 1.397.572 2.258 0 1.322-.395 2.424-1.182 3.305z"
                />
              </g>
            </svg>
            <h2>Affordable Prices</h2>
            <p>
              We don't want you worrying about high monthly costs. Our prices my
              be low, but we still offer the best coverage possible.
            </p>
          </section>

          {/* ----------People First------------------------------*/}
          <section className="xl:pr-7">
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86">
              <g fill="none" fillRule="evenodd">
                <circle cx="43" cy="43" r="43" fill="#96A9C6" />
                <path
                  fill="#FFF"
                  fillRule="nonzero"
                  d="M52.874 49.874l-5.095-2.547c-.48-.24-.779-.724-.779-1.261v-1.804c.122-.149.25-.32.383-.507.661-.933 1.19-1.972 1.576-3.093a2.116 2.116 0 001.241-1.929V36.6c0-.514-.192-1.011-.533-1.4v-2.837c.03-.293.147-2.04-1.116-3.48C47.455 27.633 45.678 27 43.267 27c-2.412 0-4.19.634-5.285 1.883-1.263 1.44-1.145 3.187-1.115 3.48V35.2a2.127 2.127 0 00-.534 1.4v2.133c0 .65.295 1.255.799 1.658.488 1.935 1.51 3.392 1.868 3.86v1.765c0 .516-.282.99-.734 1.237l-4.758 2.596A4.81 4.81 0 0031 54.073V55.8c0 2.531 8.024 3.2 12.267 3.2 4.242 0 12.266-.669 12.266-3.2v-1.623a4.786 4.786 0 00-2.659-4.303z"
                />
              </g>
            </svg>
            <h2>People First</h2>
            <p>
              Our plans aren't full of conditions and clauses to prevent
              payouts. We make sure you're covered when you need it.
            </p>
          </section>
        </div>
      </div>

      {/* --------------Find out more about MOBILE------------------------------------------- */}
      <div className="purple mx-5 mb-32 py-16 relative overflow-hidden flex-row md:hidden">
        <img
          className="absolute right-0 top-0 xl:hidden"
          src={pattern_how_we_work_mobile}
          alt="pattern_how_we_work_mobile"></img>
        <h1 className="relative z-20 xl:text-6xl xl:block">
          Find out more about how we work
        </h1>
        <a href="#" className="button">
          HOW WE WORK
        </a>
      </div>

      {/* --------------Find out more about DESKTOP------------------------------------------- */}
      <div className="hidden justify-between bg-dark_Violet text-white py-20 px-20 relative md:flex md:w-[768px] md:mx-auto lg:flex lg:w-[800px] lg:text-left lg:mx-auto xl:flex xl:flex-row xl:w-[1046px] xl:mx-auto">
        <img
          className="absolute right-0 top-0 h-full"
          src={pattern_how_we_work_desktop}
          alt="pattern_how_we_work_desktop"
        />
        <h1 className="xl:text-6xl ">
          Find out more <br />
          about how we work
        </h1>
        <div className="flex flex-col justify-center ">
          <a href="#" className="button_bottom">
            HOW WE WORK
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
