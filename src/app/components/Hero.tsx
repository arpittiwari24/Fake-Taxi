import { signIn } from "next-auth/react";

export default function Hero() {

  return (
    <div className="hero text-gray-600">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">
            Elevate Your Code, <span className="font-bold text-gray-800 text-6xl">Together!</span>
          </h1>
          <p className="mb-5 py-4 text-xl ">
            Streamline Your Development Workflow with our Code Review Collaboration Tool. Enhance teamwork, boost code
            quality, and accelerate your projects like never before. Collaborate, Code, Conquer!
          </p>
          <button className="btn btn-info hover:bg-teal-300" onClick={() => signIn()}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}