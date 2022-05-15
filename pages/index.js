import Head from "next/head";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Welcome from "../components/Welcome";

export default function Home() {
  const isAuthenticated = true;
  return (
    <div className="">
      <Head>
        <title>Pet Persona</title>
      </Head>
      {/* Contact */}
      <Contact />
      {/* Navbar */}
      <Navbar />
      {/* Welcome */}
      <Welcome />
      {/* Services */}
      <Service />
    </div>
  );
}
