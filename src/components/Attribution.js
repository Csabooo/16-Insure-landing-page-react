import React from "react";

function Attribution() {
  return (
    <div>
      <div className="mt-24 text-center text-[12px]">
        <span>
          Challenge by
          <a
            className="pr-0 underline decoration-green decoration-1 underline-offset-[5px]"
            href="https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8"
            target="_blank"
            rel="noreferrer">
            {" "}
            &nbsp; Frontend Mentor.{" "}
          </a>
          &nbsp; Coded by
          <a
            className="pr-0 underline decoration-green decoration-1 underline-offset-[5px]"
            href="https://www.frontendmentor.io/profile/Csabooo">
            {" "}
            &nbsp; Csaba Müller.
          </a>
        </span>
      </div>
    </div>
  );
}

export default Attribution;
