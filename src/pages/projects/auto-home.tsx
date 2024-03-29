import type { NextPage } from "next";
import Link from "next/link";
import ProjectDetailPageWrapper from "~/components/ProjectDetailPageWrapper";

const AutoHome: NextPage = () => {
  return (
    <ProjectDetailPageWrapper slug="auto-home">
      I have implemented a home automation system designed to streamline the
      control of various room functionalities, including blinds, lighting, and
      air conditioning. This system offers both manual and automatic control
      options. Manual control can be achieved through a dedicated mobile
      application or a web interface.
      <br />
      <br />
      Github links:
      <div className="mt-2 flex flex-wrap gap-2">
        <Link
          href="https://github.com/Gandalf-pro/auto-home-server"
          className="whitespace-nowrap rounded-2xl bg-slate-700/70 px-2 py-1 underline transition-all hover:text-pink-600"
        >
          Server
        </Link>
        <Link
          href="https://github.com/Gandalf-pro/auto-home-web"
          className="whitespace-nowrap rounded-2xl bg-slate-700/70 px-2 py-1 underline transition-all hover:text-pink-600"
        >
          Web
        </Link>
        <Link
          href="https://github.com/Gandalf-pro/auto-home-mobile"
          className="whitespace-nowrap rounded-2xl bg-slate-700/70 px-2 py-1 underline transition-all hover:text-pink-600"
        >
          Mobile
        </Link>
        <Link
          href="https://github.com/Gandalf-pro/auto-home-leds"
          className="whitespace-nowrap rounded-2xl bg-slate-700/70 px-2 py-1 underline transition-all hover:text-pink-600"
        >
          Leds
        </Link>
        <Link
          href="https://github.com/Gandalf-pro/auto-home-blinds-ac"
          className="whitespace-nowrap rounded-2xl bg-slate-700/70 px-2 py-1 underline transition-all hover:text-pink-600"
        >
          Ac/Blinds
        </Link>
        <Link
          href="https://github.com/Gandalf-pro/auto-home-arduino-general"
          className="whitespace-nowrap rounded-2xl bg-slate-700/70 px-2 py-1 underline transition-all hover:text-pink-600"
        >
          General Arduino Lib
        </Link>
      </div>
      <br />
      Here is a 1min video demonstrating it{" "}
      <Link href="https://youtu.be/tOnSqNN54eE" className="underline">
        https://youtu.be/tOnSqNN54eE
      </Link>{" "}
      (sorry for the music)
      <br />
      <br />
      The automatic control aspect is facilitated through a user-friendly
      graphical interface, which enables the creation of rules for the system.
      For instance, rules can be established to trigger actions based on
      external factors such as light levels outside, time of day, or indoor
      temperature. This results in dynamic responses, such as opening the lights
      when the outdoor light level falls below a specified threshold between
      6:00 PM and midnight, or activating the air conditioning when the indoor
      temperature exceeds a predefined threshold.
      <br />
      <br />
      The core components of this project include Arduino microcontrollers
      programmed in C++ and integrated with MQTT communication. The MQTT server,
      which orchestrates communication between the Arduinos, is hosted on a home
      server as part of my homelab infrastructure. Additionally, a Node.js-based
      backend serves as the central command hub for the entire system,
      overseeing automation tasks, monitoring and updating the status of Arduino
      devices, and facilitating communication with client applications.
      <br />
      <br />
      This project underscores a holistic and versatile approach to home
      automation, combining hardware and software components to create a
      seamless and intuitive user experience.
    </ProjectDetailPageWrapper>
  );
};

export default AutoHome;
