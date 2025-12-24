import React from "react";
import "./ProfileData.css";

export default function ProfileData() {
  return (
    <div className="profileData-container shadow-2xl h-96 w-44 rounded-xl p-6 backdrop-blur-lg border border-white/20">
      {/* <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 h-48"
      >
        <path
          fill="#7c7cff"
          d="M43.6,-65.2C57.7,-57.4,68.9,-43.3,73.4,-28.6C77.9,-13.9,75.6,1.4,70.3,15.1C65,28.7,56.6,40.8,45.5,50.8C34.5,60.9,20.8,68.9,5.6,71.1C-9.5,73.4,-19,69.8,-31.1,64.8C-43.3,59.7,-57.9,53.2,-63.3,42.2C-68.7,31.2,-64.8,15.6,-63.4,0.3C-62,-15,-63.1,-30,-58.6,-44.1C-54.1,-58.1,-43,-71.3,-29.4,-79.4C-15.8,-87.5,0.4,-90.4,14.2,-84.9C27.9,-79.3,39.5,-65.1,43.6,-65.2Z"
          transform="translate(100 100)"
        />
      </svg> */}
      <img src="images/profilephoto.png" alt="profilePhoto" style={{width:"120px"}}/>
      <div className="text-center">
        <h3>Fatemeh Kaboli</h3>
      <span className="text-sm opacity-80 ">Frontend Developer</span>
      </div>
      <div className="flex gap-2 justify-evenly">
        <div
          style={{
            backgroundColor: "#fff",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            margin: "0",
          }}
        >
          <img src="icons/telegram.png" alt="Profile" padding="0" />
          <span style={{fontSize:"12px"}}>Telegram</span>

        </div>
         <div
          style={{
            backgroundColor: "#fff",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            margin: "0",
          }}
        >
          <img src="icons/linkedin.png" alt="Profile" padding="0" />
          <span style={{fontSize:"12px"}}>Linkedin</span>
        </div>
         <div
          style={{
            backgroundColor: "#fff",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            margin: "0",
          }}
        >
          <img src="icons/telegram.png" alt="Profile" padding="0" />
          <span style={{fontSize:"12px"}}>Github</span>

        </div>
      </div>
    </div>
  );
}
