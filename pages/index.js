import About from "../components/About";
import Agent from "../components/Agent";
import Blogs from "../components/Blogs";
import Comments from "../components/Comments";
import Community from "../components/Community";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Heroe from "../components/Heroe";
import Menu from "../components/Menu";
import Services from "../components/Services";
import Started from "../components/Started";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo | Joel Carson Page Example</title>
      </Head>
      <Menu />
      <Heroe />
      <Services />
      <Agent />
      <Comments />
      <Community />
      <Started />
      <Contact />
      <About />
      <Blogs />
      <Footer />
    </>
  );
}
