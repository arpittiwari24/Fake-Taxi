
import { signIn } from "next-auth/react";
import {createClient} from "@supabase/supabase-js"
import { useEffect, useState } from "react";

export default function Hero() {

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL ?? "", process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_PUBLIC ?? "")

  const [userData, setUserData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data: users, error } = await supabase.schema("next_auth").from("Posts").select("*");
      if (error) console.log("error", error);
      else setUserData(users ?? []);
    }
    fetchData();
  }, []);

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
      {/* <div>{JSON.stringify(userData)}</div> */}
    </div>
  );
}