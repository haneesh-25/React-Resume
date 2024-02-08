import React from "react";
import "./Follow.css";

function Follow(props) {
  const myProfileDetails = props.details;

  const openLink = (social) => {
    window.open(social.link, "_blank");
  };

  return (
    <section id="follow">
      <div className="container text-center">
        <h4>Social Links</h4>
      </div>
      <br />
      <div className="container horizontal-links">
        <img
          style={{
            width: "35px",
            height: "35px",
            margin: "5px",
            cursor: "pointer",
          }}
          src={myProfileDetails.profile_links.github.image}
          alt="GitHub"
          onClick={() => openLink(myProfileDetails.profile_links.github)}
        />
        <img
          style={{
            width: "35px",
            height: "35px",
            margin: "5px",
            cursor: "pointer",
          }}
          src={myProfileDetails.profile_links.linkedin.image}
          alt="LinkedIn"
          onClick={() => openLink(myProfileDetails.profile_links.linkedin)}
        />
        <img
          style={{
            width: "35px",
            height: "35px",
            margin: "5px",
            cursor: "pointer",
          }}
          src={myProfileDetails.profile_links.email.image}
          alt="Email"
          onClick={() => openLink(myProfileDetails.profile_links.email)}
        />
        <img
          style={{
            width: "35px",
            height: "35px",
            margin: "5px",
            cursor: "pointer",
          }}
          src={myProfileDetails.profile_links.leetcode.image}
          alt="LeetCode"
          onClick={() => openLink(myProfileDetails.profile_links.leetcode)}
        />
      </div>
    </section>
  );
}

export default Follow;
