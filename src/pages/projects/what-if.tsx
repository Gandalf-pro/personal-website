import type { NextPage } from "next";
import ProjectDetailPageWrapper from "~/components/ProjectDetailPageWrapper";

const WhatIf: NextPage = () => {
  return (
    <ProjectDetailPageWrapper slug="what-if">
      I played a key role in an AI face changer project at https://whatifapp.co,
      with expertise in Node.js, TypeScript, Next.js (with Tailwind CSS), React
      Native, and Expo (with TypeScript and NativeWind).
      <br />
      <br />
      The project&apos;s main goal was to create a robust AI backend for
      seamless face swapping in both images and videos, complete with facial
      recognition. I developed a face detection algorithm in Python, hosted on
      Runpod with GPU scaling. Additionally, I handled the backend&apos;s credit
      system, implemented a fault-tolerant S3 media upload process, and set up
      real-time results using long-polling.
      <br />
      <br />
      The mobile app posed challenges, especially when integrating WhatsApp
      stickers. I crafted a custom library and allowed users to add swapped
      media to their sticker collection. My contributions extended to various
      app pages.
      <br />
      <br />
      The project was deployed on Kubernetes with autoscaling, and I implemented
      a background worker for queue/cron jobs (image scaling, notifications,
      etc.).
      <br />
      <br />
      Security was a priority. I established secure webhooks for third-party
      services like RevenueCat, Stripe, and Runpod. Caching using Redis
      optimized system performance.
      <br />
      <br />
      In summary, my role encompassed backend, frontend, and mobile development,
      integrating advanced AI technologies, and ensuring a resilient system
      architecture. This project delivered a cutting-edge face-changing
      application.
    </ProjectDetailPageWrapper>
  );
};

export default WhatIf;
