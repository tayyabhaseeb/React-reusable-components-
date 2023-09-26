import React from "react";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";
import Button from "./components/Button";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Testimonial from "./components/Testimonial";

export default function App() {
  return (
    <div className="app-container">
      <Heading className="header-heading" style={{ color: "red" }}>
        Components Library ++
      </Heading>
      <Heading className="header-heading">Buttons components</Heading>
      <div className="parent-cont">
        <div className="child-one">
          <Subheading className="sub-heading">Square</Subheading>
          <Button className="general-btn" radius="square" color="purple">
            Badge
          </Button>
          <Button className="general-btn" radius="square" color="gray">
            Badge
          </Button>
          <Button className="general-btn" radius="square" color="red">
            Badge
          </Button>
          <Button className="general-btn" radius="square" color="blue">
            Badge
          </Button>
          <Button className="general-btn" radius="square" color="green">
            Badge
          </Button>
          <Button className="general-btn" radius="square" color="pink">
            Badge
          </Button>
        </div>
        {/* 2nd child */}

        <div className="child-one">
          <Subheading className="sub-heading">Round</Subheading>
          <Button className="general-btn" radius="round" color="purple">
            Badge
          </Button>
          <Button className="general-btn" radius="round" color="gray">
            Badge
          </Button>
          <Button className="general-btn" radius="round" color="red">
            Badge
          </Button>
          <Button className="general-btn" radius="round" color="blue">
            Badge
          </Button>
          <Button className="general-btn" radius="round" color="green">
            Badge
          </Button>
          <Button className="general-btn" radius="round" color="pink">
            Badge
          </Button>
        </div>
      </div>
      <Heading className="header-heading">Banner components</Heading>
      <div className="banner-main-cont">
        <div className="banner-child-one">
          <Banner
            message="Congratsulations"
            className="banner-cont"
            avat="Congrasulations"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner>
          {/* Child 2 */}
          <Banner
            message="Update Available"
            className="banner-cont"
            avat="Update"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Banner>

          {/* Child three */}
          <Banner
            message="There is some error occuring in the device"
            className="banner-cont"
            avat="Problem"
          >
            Lorem ipsum dolor sit amet consec
          </Banner>

          {/* Child four */}
          <Banner message="Attention" className="banner-cont" avat="Attention">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner>
        </div>
        <div className="banner-child-two">
          <Banner
            message="Congratsulations"
            className="banner-cont"
            avat="Congrasulations"
          />
          <Banner
            message="Update Available"
            className="banner-cont"
            avat="Update"
          />
          <Banner
            message="There is some error occuring in the device"
            className="banner-cont"
            avat="Problem"
          />
          <Banner
            message="Attention"
            className="banner-cont"
            avat="Attention"
          />
        </div>
      </div>
      <Heading className="header-heading">Cards components</Heading>
      <div className="card-parent">
        <Card heading="Easy Deployment" avatar="deployed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          numquam dolorum laborum nostrum eius natus sit corrupti.
        </Card>
        <Card heading="Easy Deployment" avatar="deployment">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          numquam dolorum laborum nostrum eius natus sit corrupti.
        </Card>
      </div>
      <div className="testimonial-parent">
        <Testimonial heading="Work Caption">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          veritatis est facere molestiae rem odit quas enim dolorem saepe dicta!
          Doloribus laboriosam, officia aliquam suscipit molestiae velit nemo
          itaque accusantium.
        </Testimonial>
      </div>
    </div>
  );
}
