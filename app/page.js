import Image from 'next/image'

import Navbar from "./components/Navbar";
import Home_ from "./components/Home_";
import Doc from "./components/Doc"
import Hire from './components/Hire';
import Features from "./components/Features";
import Infinite from "./components/Infinite";
import Enterprise from "./components/Enterprise";

function Home() {
  return (
    <div className="md:container">
      <Navbar/>
      <Home_/>
      <Doc/>
      <Infinite id="investors"/>
      <Hire/>
      <Features id="#features"/>
      <Enterprise id="security" />
    </div>
  );
}

export default Home;
