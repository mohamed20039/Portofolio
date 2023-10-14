import Home from "@/Pages/Home";
import Image from "next/image";
import Header from "@/Components/Header";
import About from "./about/page";
import Projects from "./projects/page";


export default function Page() {
  return (
    <div className="">
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
}
