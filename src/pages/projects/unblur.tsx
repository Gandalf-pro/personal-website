import type { NextPage } from "next";
import ProjectDetailPageWrapper from "~/components/ProjectDetailPageWrapper";

const Unblur: NextPage = () => {
  return (
    <ProjectDetailPageWrapper slug="unblur">
      This project entailed the development of an iOS application designed to
      enhance user-submitted images by rectifying blurriness and improving
      resolution. My role primarily involved the development of backend systems
      using Node.js (TypeScript), Python and Kubernetes.
      <br />
      <br />
      The AI engine powering this system was authored in Python, responsible for
      processing tasks retrieved from a job queue. The scalability of Kubernetes
      nodes was dynamically managed in response to the queue's workload,
      allowing for efficient resource allocation.
      <br />
      <br />
      User requests were processed by a Node.js (TypeScript) backend, which
      orchestrated the entire image enhancement process. This involved the
      initiation of user photo uploads to a designated storage bucket, followed
      by the enqueuing of enhancement tasks. Once the image enhancement was
      complete, the backend facilitated the delivery of the enhanced image to
      the user.
    </ProjectDetailPageWrapper>
  );
};

export default Unblur;
