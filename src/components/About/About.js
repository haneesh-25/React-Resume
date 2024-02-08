import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import { Card, CardContent } from "@material-ui/core";

function About(props) {
  const myProfileDetails = props.details;

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6" style={{ padding: "20px" }}>
            <figure className="imgeffect">
              <motion.img
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 40 }}
                src={myProfileDetails.profilephoto}
                alt="Profile"
                width="70%"
                height="80%"
                style={{ borderRadius: "50%" }}
              />
            </figure>
          </div>
          <motion.div
            className="col-12 col-sm-6"
            style={{
              padding: "25px",
            }}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.8, stiffness: 40 }}
          >
            <h2>About</h2>
            <br />
            <p>{myProfileDetails.about_me.para1}</p>
            <p>{myProfileDetails.about_me.para2}</p>
            <p>{myProfileDetails.about_me.para3}</p>
            <p>{myProfileDetails.about_me.para4}</p>
            <p>{myProfileDetails.about_me.para5}</p>
          </motion.div>
        </div>
      </div>
      <div className="container">
        <div
          className="row"
          style={{
            marginTop: "40px",
          }}
        >
          <motion.div
            className="col-12 col-md-4"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            style={{ marginTop: "20px" }}
          >
            <Card
              className="about-card-style"
              variant="outlined"
              style={{
                backgroundColor: "#27292d",
              }}
            >
              <CardContent>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <b style={{ fontSize: "26px" }}>
                    College
                  </b>
                  <br />
                  { myProfileDetails.education.college.name }
                  <br/>
                  { myProfileDetails.education.college.course }
                  <br/>
                  { myProfileDetails.education.college.timeline }
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="col-12 col-md-4"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            style={{ marginTop: "20px" }}
          >
            <Card
              className="about-card-style"
              variant="outlined"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#27292d",
              }}
            >
              <CardContent>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <b style={{ fontSize: "26px" }}>
                    Intermediate
                  </b>
                  <br />
                  { myProfileDetails.education.higher_secondary_school.name }
                  <br/>
                  { myProfileDetails.education.higher_secondary_school.course }
                  <br/>
                  { myProfileDetails.education.higher_secondary_school.timeline }
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="col-12 col-md-4"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            style={{ marginTop: "20px" }}
          >
            <Card
              className="about-card-style"
              variant="outlined"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#27292d",
              }}
            >
              <CardContent>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <b style={{ fontSize: "26px" }}>
                    Secondary School
                  </b>
                  <br />
                  { myProfileDetails.education.secondary_school.name }
                  <br/>
                  { myProfileDetails.education.secondary_school.course }
                  <br/>
                  { myProfileDetails.education.secondary_school.timeline }
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
