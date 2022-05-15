import Head from "next/head";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

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
      {/* Services */}
    </div>
  );
}
