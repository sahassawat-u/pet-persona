import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Login from "./Login";

export default function Home() {
  const isAuthenticated = true;
  return (
    <div className="h-screen bg-gradient-to-b from-[#92BAD0] to-[#1DE4E4]">
      <Head>
        <title>Pet Lover</title>
      </Head>
      {/* Navbar */}
      <Navbar />
      {!isAuthenticated ? (
        <div className="">
          {/* Login */}
          <Login />
        </div>
      ) : (
        <div className="">
          <Main />
        </div>
      )}
    </div>
  );
}
