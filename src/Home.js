import React ,{useState } from "react";
import NavBar from "./NavBar";
import Fristsection from "./Fristsection.js";
import Lastsection from "./Lastsection.js";
import Footer from "./Footer";

function Home() {

  const [filter , setFilter] = useState(
    {
      posttype:"All",
      jobcategory:"All",
     jobSector:"All",
     location :"All"

  }
  )
  
// new line 
  
  

  return (
    <>
      <NavBar />
      <Fristsection setFilter={setFilter} filter={filter} />
      <Lastsection filter={filter} />
      <Footer/>
    </>
  );
}

export default Home;
//             Home
// 
// Fristsection   Lastsection