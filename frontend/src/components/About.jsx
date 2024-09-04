import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about is food.</p>
          </div>
          <p className="mid">
            Welcome to TastyBites, where culinary excellence meets warm
            hospitality. Our menu boasts a variety of superb and tasty dishes,
            crafted with passion by our skilled chefs. We pride ourselves on
            creating memorable dining experiences in a welcoming atmosphere.
            Whether you're planning a special occasion or a casual meal, we
            invite you to book a reservation and savor our exceptional cuisine.
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
