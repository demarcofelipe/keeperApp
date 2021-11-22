import React from "react";

function Footer () {

    let currentDate = new Date ();
    let currentYear = currentDate.getFullYear()

  return ( <footer>
  <p>copyright © {currentYear}</p> 
  </footer>)
}

export default Footer