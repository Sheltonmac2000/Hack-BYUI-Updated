import React from "react";
import header from "./header.module.css";

function Header() {
  return (
    <div className={header.bodyContainer}>
      <div className={header.container}>
        <div className={header.mainHeader}>
          <h1>I-Hack</h1>
          <h2>2023</h2>
          <h3>Oct 20th - 21st</h3>
        </div>
        <div className={header.content}>
          <h2>Welcome</h2>
          <p>
            I-Hack is an exciting event that combines learning, 
            networking, and problem-solving. Participants collaborate with 
            like-minded individuals, attend workshops, and network with 
            professionals. It's a platform to showcase skills, have fun, and 
            explore career opportunities in a dynamic environment.
          </p>
          <button>Pre-Register</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
