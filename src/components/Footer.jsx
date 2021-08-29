import "../App.css";
// import { keyframes } from "styled-components";
import Image2 from "./images/earthGlobe.png";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        <img className="loading" src={Image2} />
        <span> </span>
        <b>HISTORY SIMPLIFIED</b> is developed by Ferdinand Mbecha and Carsten Hennig -
        This very first beta page presents the first chapter: <b>The history of US$</b>
      </p>
    </footer>
  );
}
