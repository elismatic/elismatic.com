import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import Signin from "../components/Signin"
import Link from "next/link"
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";

export default async function Index() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9eae1] p-8 text-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="w-full md:w-1/2 p-8 text-left">
            <nav className="mb-6 flex justify-start">
              <div className="flex items-center space-x-4">
                <ElismaticIcon className="text-[#bd1e59] h-6 w-6" />
                <span className="font-bold text-[#bd1e59]">Elismatic</span>
              </div>
            </nav>
            <h1 className="text-4xl font-bold text-[#bd1e59] mb-4">Meet your people</h1>
            <p className="mb-6 text-gray-700">
              We are a family social club that decided to hang out together. And this is our power. Wanna join?
            </p>
            <Signin className="bg-[#bd1e59] text-white hover:bg-[#9c1749]">Sign in</Signin>
          </div>
          <div className="w-full md:w-1/2 bg-[#ffede0] p-8 flex flex-col items-center justify-center">
            <div className="flex justify-between w-full mb-6">
              <Link className="text-gray-700 hover:text-gray-900 hover:underline focus:underline" href="#">
                Mail
              </Link>
              <Link className="text-gray-700 hover:text-gray-900 hover:underline focus:underline" href="#">
                Chat
              </Link>
              <Link className="text-gray-700 hover:text-gray-900 hover:underline focus:underline" href="#">
                Events
              </Link>
              <Link className="text-gray-700 hover:text-gray-900 hover:underline focus:underline" href="#">
                More
              </Link>
            </div>
            <img
              alt="Family social club illustration"
              className="mb-4"
              height="400"
              src="img/pizza-sharing.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <div className="space-y-2">
              <div className="h-2 w-8 bg-[#bd1e59]" />
              <div className="h-2 w-4 bg-[#bd1e59]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ElismaticIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}